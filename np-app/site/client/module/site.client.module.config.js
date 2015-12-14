'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .config(siteConfig)
    .run(siteRun);

// bind site module to document
angular.bootstrap(document, ['site']);

function siteConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}

// set global variables
function siteRun($window, $rootScope, $state, $stateParams) {
    $rootScope.coreSettings = $window.coreSettingsSource;
    $rootScope.primaryMenu = $window.primaryMenuSource;
    $rootScope.secondaryMenu = $window.secondaryMenuSource;
    $rootScope.menus = $window.menusSource;
    $rootScope.pages = $window.pagesSource;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}
