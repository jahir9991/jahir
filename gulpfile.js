var gulp = require('gulp'),
    gutil = require('gulp-util'),
    // compass = require('gulp-compass');
    connect = require('gulp-connect'),
    open = require('gulp-open');


// var sassSources = './component/sass/*.scss';
var htmlSources = 'Development/*.html';
var jsSources = 'Development/js/*.js';


gulp.task('compass', function () {
    gulp.src(sassSources)
        .pipe(compass({
            css: '/public/css',
            sass: '/component/sass',
        }).on('error', gutil.log))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        port: 3000,
        root: 'Development',
        livereload: true
    });
    gulp.src(__filename)
        .pipe(open(
            {
                uri: 'http://localhost:3000',
                app: 'chrome'
            }
        ))

});

gulp.task('html', function () {

    gulp.src(htmlSources)
        .pipe(connect.reload());

});


gulp.task('watch', function () {
    // gulp.watch(sassSources, ['compass']);
    gulp.watch(htmlSources, ['html']);
});


gulp.task('default', ['html', 'connect', 'watch']);
