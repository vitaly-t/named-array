'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');

gulp.task('lint', () => {
    return gulp.src('./src/*.js', './gulpfile.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
    return gulp.src('./src/named-array.js')
        .pipe(uglify())
        .pipe(rename('named-array.min.js'))
        .pipe(gulp.dest('./src/'));
});

gulp.task('default', gulp.series(['lint', 'build']));
