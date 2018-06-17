var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();




gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () { // reload browser on saving
        browserSync.reload();
    });

    watch('./app/assets/style/**/*.css', function () {
        gulp.start('cssInject')
    })
});


gulp.task('cssInject', ['style'], function () {
    gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
});