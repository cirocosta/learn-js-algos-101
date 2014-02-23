var gulp = require('gulp'),
    gutil = require('gulp-util'),
    mocha = require("gulp-mocha"),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint');

gulp.task('test', function () {
    gulp.src('tests/**/*.js')
        .pipe(mocha({
            reporter: 'spec'
        }));

    gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});



gulp.task('watch', function() {
    gulp.watch('./**/*.js', function (event) {
        gutil.log('File ' + event.path + 'was ' + event.type +
            ',running tasks');
        gulp.run('test');
    });
});