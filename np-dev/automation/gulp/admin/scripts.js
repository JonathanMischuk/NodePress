'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify');

gulp.task('bundleAdmin', function () {
    gulp.src('np-app/admin/client/modules/index.js')
        .pipe(browserify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('np-app/admin/client/js'));
});
