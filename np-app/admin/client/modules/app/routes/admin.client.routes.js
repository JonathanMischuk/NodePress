var angular = require('angular');

module.exports = angular.module('app')
    .config(adminRoutes);

function adminRoutes (
    $stateProvider,
    $urlRouterProvider
) {
    'use strict';

    $urlRouterProvider.when('/', '/dashboard');

    $stateProvider
        .state('np', {
            url: '/',
            abstract: true,
            views: {
                'content': {
                    templateUrl: 'admin.client.innerContent.view.html'
                    
                },
                'secondaryMenu': {
                    templateUrl: 'admin.client.secondaryMenu.view.html',
                    controller: 'AdminSecondaryMenuController as SecondaryMenuCtrl'
                }
            },
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query();
                },
                categories: function (AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.query();
                },
                users: function (AdminUsersAPIService) {
                    return AdminUsersAPIService.query();
                },
                menus: function (AdminMenusAPIService) {
                    return AdminMenusAPIService.query();
                },
                sidebars: function (AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.query();
                },
                components: function (AdminComponentsService, $state) {
                    return AdminComponentsService.getComponentsByState({
                        state: $state.next.name
                    });
                }
            }
        });
}
