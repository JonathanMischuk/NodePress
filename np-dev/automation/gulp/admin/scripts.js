'use strict';

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify');

gulp.task('bundle', function () {
    gulp.src('np-app/admin/client/modules/index.js')
        .pipe(webpack())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('np-app/admin/client/js'));
});
