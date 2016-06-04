var angular = require('angular');

module.exports = angular.module('dashboard')
    .config(adminDashboardRoutes);

function adminDashboardRoutes (
    $stateProvider
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
                },
                componentsDashboard: function (AdminComponentsService, $state) {
                    return AdminComponentsService.getComponentsByStateAndSection({
                        state: $state.current.menu,
                        section: 'dashboard'
                    });
                }
            }

        });
}
