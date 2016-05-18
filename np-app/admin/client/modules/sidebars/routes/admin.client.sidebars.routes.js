'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .config(adminSidebarRoutes);

function adminSidebarRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('sidebars', {
            url: '/sidebars/',
            templateUrl: 'admin.client.sidebars.view.html',
            controller: 'AdminGetSidebarsController as sidebars',
            resolve: {
                sidebars: function (AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.query()
                }
            }
        })
        .state('newSidebar', {
            url: '/sidebars/new-sidebar',
            templateUrl: 'admin.client.sidebarsNew.view.html',
            controller: 'AdminNewSidebarController as sidebar',
            resolve: {
                pluginsConfig: function (AdminPluginsService) {
                    return AdminPluginsService.getPluginConfig();
                },
                activePlugins: function (AdminPluginsService) {
                    return AdminPluginsService.getActivePlugins();
                },
                menus: function ($http) {
                    return $http.get('/api/menus').then(function (response) {
                        return response.data;
                    });
                }
            }
        })
        .state('editSidebar', {
            url: '/sidebars/:sidebarId',
            templateUrl: 'admin.client.sidebarsEdit.view.html',
            controller: 'AdminUpdateSidebarController as sidebar',
            resolve: {
                pluginsConfig: function (AdminPluginsService) {
                    return AdminPluginsService.getPluginConfig();
                },
                activePlugins: function (AdminPluginsService) {
                    return AdminPluginsService.getActivePlugins();
                },
                sidebar: function ($stateParams, AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.get({
                        sidebarId: $stateParams.sidebarId
                    });
                },
                menus: function ($http) {
                    return $http.get('/api/menus').then(function (response) {
                        return response.data;
                    });
                }
            }
        });
}
