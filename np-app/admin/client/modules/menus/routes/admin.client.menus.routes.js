'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .config(adminMenuRoutes);

function adminMenuRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('np.menus', {
            url: 'menus/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.menus.view.html',
                    controller: 'AdminGetMenusController as menus'
                }
            },
            resolve: {
                menus: function (AdminMenusAPIService) {
                    return AdminMenusAPIService.query();
                }
            }
        })
        .state('np.manageMenus', {
            url: 'menus/manage-menus',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.menusManageLocations.view.html',
                    controller: 'AdminManageMenuLocationsController as menus'
                }
            },
            resolve: {
                menus: function (AdminMenusAPIService) {
                    return AdminMenusAPIService.query();
                },
                menuLocations: function (AdminManageMenuLocationsService) {
                    return AdminManageMenuLocationsService.getMenuLocations();
                }
            }
        })
        .state('np.newMenu', {
            url: 'menus/new-menu/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.menusNew.view.html',
                    controller: 'AdminNewMenuController as menu'
                }
            },
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query(function (pages) {
                        angular.forEach(pages, function (page, i) {
                            page.menuItemId = i;
                        });

                        return pages;
                    });
                }
            }
        })
        .state('np.editMenu', {
            url: 'menus/:menuId',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.menusEdit.view.html',
                    controller: 'AdminUpdateMenuController as menu'
                }
            },
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query(function (pages) {
                        angular.forEach(pages, function (page, i) {
                            page.menuItemId = i;
                        });

                        return pages;
                    });
                },
                menu: function ($q, $stateParams, AdminMenusAPIService) {
                    var deferred = $q.defer();

                    AdminMenusAPIService.get({
                        menuId: $stateParams.menuId
                    }, function (response) {
                        deferred.resolve(response);
                    });

                    return deferred.promise;
                }
            }
        });
}
