'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');

const SRC_FILE = 'named-array.js';

gulp.task('lint', () => {
    return gulp.src('./src/' + SRC_FILE, './gulpfile.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
    return gulp.src('./src/' + SRC_FILE)
        .pipe(uglify())
        .pipe(rename('named-array.min.js'))
        .pipe(gulp.dest('./src/'));
});

gulp.task('default', gulp.series(['lint', 'build']));
