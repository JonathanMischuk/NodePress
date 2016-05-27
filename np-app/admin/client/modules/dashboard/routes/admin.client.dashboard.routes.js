var angular = require('angular');

module.exports = angular.module('dashboard')
    .config(adminDashboardRoutes);

function adminDashboardRoutes (
    $stateProvider,
    $urlRouterProvider
) {
    'use strict';

    $stateProvider
        .state('np.dashboard', {
            url: 'dashboard',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.dashboard.view.html',
                    controller: 'AdminDashboardController as dashboard'
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
                }
            }

        });
}

/*
var angular = require('angular');

module.exports = angular.module('dashboard')
    .config(adminDashboardRoutes);

function adminDashboardRoutes (
    $stateProvider, 
    $urlRouterProvider
) {
    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'admin.client.dashboard.view.html',
                    controller: 'AdminDashboardController as dashboard'
                },
                'secondaryMenu': {
                    templateUrl: 'admin.client.secondaryMenu.view.html'
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
                }
            }

        });
}
*/
