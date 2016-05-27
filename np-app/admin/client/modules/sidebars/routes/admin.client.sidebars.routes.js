'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .config(adminSidebarRoutes);

function adminSidebarRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('np.sidebars', {
            url: 'sidebars/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.sidebars.view.html',
                    controller: 'AdminGetSidebarsController as sidebars'
                }
            },
            resolve: {
                sidebars: function (AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.query()
                }
            }
        })
        .state('np.newSidebar', {
            url: 'sidebars/new-sidebar',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.sidebarsNew.view.html',
                    controller: 'AdminNewSidebarController as sidebar'
                }
            },
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
        .state('np.editSidebar', {
            url: 'sidebars/:sidebarId',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.sidebarsEdit.view.html',
                    controller: 'AdminUpdateSidebarController as sidebar'
                }
            },
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
