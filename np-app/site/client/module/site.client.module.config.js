'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .config(siteConfig)
    .run(siteRun);

function siteConfig($locationProvider, $provide) {
    $locationProvider.html5Mode(true);

    $provide.decorator('$state', function($delegate, $rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, state, params) {
            $delegate.next = state;
            $delegate.toParams = params;
        });

        return $delegate;
    });
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
