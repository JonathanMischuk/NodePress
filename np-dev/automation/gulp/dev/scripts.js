'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify');

gulp.task('browserifyDev', function () {
    gulp.src('client/components/default.client.component.js')
        .pipe(browserify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/js'));
});
