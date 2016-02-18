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
    $rootScope.np = $window.np;
}
