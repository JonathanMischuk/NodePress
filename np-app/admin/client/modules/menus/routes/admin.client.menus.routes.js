'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .config(adminMenuRoutes);

function adminMenuRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('menus', {
            url: '/menus/',
            templateUrl: 'admin.client.menus.view.html'
        })
        .state('manageMenus', {
            url: '/menus/manage-menus',
            templateUrl: 'admin.client.menusManageLocations.view.html'
        })
        .state('newMenu', {
            url: '/menus/new-menu/',
            templateUrl: 'admin.client.menusNew.view.html'
        })
        .state('editMenu', {
            url: '/menus/:menuId',
            templateUrl: 'admin.client.menusEdit.view.html'
        });
}
