'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .config(adminSettingsRoutes);

function adminSettingsRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('settings', {
            url: '/settings/',
            templateUrl: 'admin.client.settings.view.html'
        });
}
