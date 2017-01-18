'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    concatCSS = require('gulp-concat-css'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('adminSkinLight', function () {
    gulp.src('np-dev/pre-processors/less/skins/default.skin.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concatCSS('app.min.css'))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('np-app/admin/client/skins/default'));
});
