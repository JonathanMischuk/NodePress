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
            abstract: true,
            templateUrl: 'admin.client.settings.view.html',
            controller: 'AdminSettingsController as np',
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query();
                },
                settings: function (AdminAppSettingsService) {
                    return AdminAppSettingsService.getAppSettings();
                }
            }
        })
        .state('settings.general', {
            url: '/general',
            templateUrl: 'admin.client.settings.general.view.html',
            controller: 'AdminSettingsGeneralController as settings',
            resolve: {
                pages: function (pages) {
                    return pages;
                },
                settings: function (settings) {
                    return settings;
                }
            }
        })
        .state('settings.themes', {
            url: '/themes',
            templateUrl: 'admin.client.settings.themes.view.html',
            controller: 'AdminSettingsThemesController as settings',
            resolve: {
                settings: function (settings) {
                    return settings;
                }
            }
        })
        .state('settings.plugins', {
            url: '/plugins',
            templateUrl: 'admin.client.settings.plugins.view.html',
            controller: 'AdminSettingsPluginsController as settings',
            resolve: {
                settings: function (settings) {
                    return settings;
                },
                pluginsConfig: function (AdminPluginsService) {
                    return AdminPluginsService.getPluginConfig();
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
