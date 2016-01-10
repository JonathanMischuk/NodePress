'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .config(adminSettingsRoutes);

function adminSettingsRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/settings');

    $stateProvider
        .state('settings', {
            url: '/settings',
            templateUrl: 'admin.client.settings.view.html',
            controller: function ($state) {
                $state.go('settings.general');
            }
        })
        .state('settings.general', {
            url: '/general',
            templateUrl: 'admin.client.settings.general.view.html'
        })
        .state('settings.themes', {
            url: '/themes',
            templateUrl: 'admin.client.settings.themes.view.html'
        })
        .state('settings.skins', {
            url: '/skins',
            templateUrl: 'admin.client.settings.skins.view.html'
        });
}
