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

// Site Browserify bundle
fs.readdirSync(__dirname + '/np-dev/automation/gulp/site').forEach(function (task) {
    require('./np-dev/automation/gulp/site/' + task);
});

gulp.task('watch:bundleSite', ['bundleSite'], function () {
    gulp.watch('np-app/site/client/module/**/*.js', ['bundleSite']);
});