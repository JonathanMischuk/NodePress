'use strict';

var angular = require('angular');

module.exports = angular.module('admin')
    .config(adminConfig)
    .run(adminRun);

function adminConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}

// set global variables
function adminRun($window, $rootScope) {
    $rootScope.exists = $window.exists;
    $rootScope.auth = $window.auth;
    $rootScope.themes = $window.themes;
    $rootScope.skins = $window.skins;
    $rootScope.pluginsConfig = $window.pluginsConfig;
}
