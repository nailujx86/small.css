var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var zopfli= require('gulp-zopfli-green');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var fs = require('fs-extra');

gulp.task('clean', (done) => {
    fs.removeSync('dist');
    fs.removeSync('build');
    done();
});

gulp.task('minify_js', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/optimized'))
        .pipe(uglify())
        .pipe(gulp.dest('build/minified'))
        .pipe(gulp.dest('dist'))
        .pipe(zopfli())
        .pipe(gulp.dest('dist'));
    done();
})

gulp.task('minify_css', () => {
    return gulp.src('src/*.css')
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('dist/'))
        .pipe(zopfli())
        .pipe(gulp.dest('dist/'));
    done();
});

gulp.task('default', gulp.series('clean', gulp.parallel('minify_css', 'minify_js')));