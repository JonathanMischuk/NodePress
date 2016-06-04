'use strict';

var angular = require('angular');

module.exports = angular.module('admin')
    .config(adminConfig)
    .run(adminRun);

function adminConfig($locationProvider, $provide) {
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
function adminRun($window, $rootScope) {
    $rootScope.np = $window.np;
}
