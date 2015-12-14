'use strict';

var angular = require('angular');

module.exports = angular.module('admin')
    .config(adminConfig)
    .run(adminRun);

// bind admin module to document
angular.bootstrap(document, ['admin']);

function adminConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}

// set global variables
function adminRun($window, $rootScope) {
    $rootScope.exists = $window.exists;
    $rootScope.auth = $window.auth;
    $rootScope.themes = $window.themes;
}
