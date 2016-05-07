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
            controller: 'AdminNewSidebarController as sidebar'
        })
        .state('editSidebar', {
            url: '/sidebars/:sidebarId',
            templateUrl: 'admin.client.sidebarsEdit.view.html',
            controller: 'AdminUpdateSidebarController as sidebar',
            resolve: {
                sidebar: function ($stateParams, AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.get({
                        sidebarId: $stateParams.sidebarId
                    });
                }
            }
        });
}
