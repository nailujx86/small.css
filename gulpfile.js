var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var zopfli= require('gulp-zopfli-green');

gulp.task('default', function() {
    return gulp.src('src/*.css')
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('dist/'))
        .pipe(zopfli())
        .pipe(gulp.dest('dist/'));
    done();
});