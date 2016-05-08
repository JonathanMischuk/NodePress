var angular = require('angular');

module.exports = angular.module('settings')
    .config(adminSettingsRoutes);

function adminSettingsRoutes (
    $stateProvider, 
    $urlRouterProvider
) {
    'use strict';
    
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
            templateUrl: 'admin.client.settings.general.view.html',
            controller: 'AdminSettingsGeneralController as settings',
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query();
                },
                settings: function (AdminAppSettingsService) {
                    return AdminAppSettingsService.getAppSettings();
                }
            }
        })
        .state('settings.themes', {
            url: '/themes',
            templateUrl: 'admin.client.settings.themes.view.html',
            controller: 'AdminSettingsThemesController as settings',
            resolve: {
                settings: function (AdminAppSettingsService) {
                    return AdminAppSettingsService.getAppSettings();
                }
            }
        })
        .state('settings.skins', {
            url: '/skins',
            templateUrl: 'admin.client.settings.skins.view.html',
            controller: 'AdminSettingsSkinsController as settings',
            resolve: {
                settings: function (AdminAppSettingsService) {
                    return AdminAppSettingsService.getAppSettings();
                }
            }
        });
}
