'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify');

gulp.task('bundleSite', function () {
    gulp.src('np-app/site/client/module/index.js')
        .pipe(browserify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('np-app/site/client/js'));
});
