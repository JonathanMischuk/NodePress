'use strict';

var gulp = require('gulp'),
    fs = require('fs');

// Admin Browserify bundle
fs.readdirSync(__dirname + '/np-dev/automation/gulp/admin').forEach(function (task) {
    require('./np-dev/automation/gulp/admin/' + task);
});

gulp.task('watch:bundleAdmin', ['bundleAdmin'], function () {
    gulp.watch('np-app/admin/client/modules/**/*.js', ['bundleAdmin']);
});

// Admin LESS compilation
gulp.task('watch:adminSkinDefault', function () {
    gulp.watch('np-dev/pre-processors/less/**/*.less', ['adminSkinDefault']);
});

gulp.task('watch:adminSkinDark', function () {
    gulp.watch('np-dev/pre-processors/less/**/*.less', ['adminSkinDark']);
});

gulp.task('watch:adminSkinsAll', function () {
    gulp.watch('np-dev/pre-processors/less/**/*.less', ['adminSkinDark']);
    gulp.watch('np-dev/pre-processors/less/**/*.less', ['adminSkinDefault']);
});

// Site Browserify bundle
fs.readdirSync(__dirname + '/np-dev/automation/gulp/site').forEach(function (task) {
    require('./np-dev/automation/gulp/site/' + task);
});

gulp.task('watch:bundleSite', ['bundleSite'], function () {
    gulp.watch('np-app/site/client/module/**/*.js', ['bundleSite']);
});
