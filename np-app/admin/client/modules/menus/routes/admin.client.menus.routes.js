'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .config(adminMenuRoutes);

function adminMenuRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('menus', {
            url: '/menus/',
            templateUrl: 'admin.client.menus.view.html',
            controller: 'AdminGetMenusController as menus',
            resolve: {
                menus: function (AdminMenusAPIService) {
                    return AdminMenusAPIService.query();
                }
            }
        })
        .state('manageMenus', {
            url: '/menus/manage-menus',
            templateUrl: 'admin.client.menusManageLocations.view.html',
            controller: 'AdminManageMenuLocationsController as menus',
            resolve: {
                menus: function (AdminMenusAPIService) {
                    return AdminMenusAPIService.query();
                },
                menuLocations: function (AdminManageMenuLocationsService) {
                    return AdminManageMenuLocationsService.getMenuLocations();
                }
            }
        })
        .state('newMenu', {
            url: '/menus/new-menu/',
            templateUrl: 'admin.client.menusNew.view.html',
            controller: 'AdminNewMenuController as menu',
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query(function (pages) {
                        pages.forEach(function (page, i) {
                            page.checked = false;
                            page.menuItemId = i;
                        });

                        return pages;
                    });
                }
            }
        })
        .state('editMenu', {
            url: '/menus/:menuId',
            templateUrl: 'admin.client.menusEdit.view.html',
            controller: 'AdminUpdateMenuController as menu',
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query(function (pages) {
                        pages.forEach(function (page, i) {
                            page.checked = false;
                            page.menuItemId = i;
                        });

                        return pages;
                    });
                },
                menu: function ($stateParams, AdminMenusAPIService) {
                    return AdminMenusAPIService.get({
                        menuId: $stateParams.menuId
                    });
                }
            }
        });
}
