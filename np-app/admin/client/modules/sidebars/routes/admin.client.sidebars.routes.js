'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .config(adminSidebarRoutes);

function adminSidebarRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('sidebars', {
            url: '/sidebars/',
            templateUrl: 'admin.client.sidebars.view.html'
        })
        .state('newSidebar', {
            url: '/sidebars/new-sidebar',
            templateUrl: 'admin.client.sidebarsNew.view.html'
        })
        .state('editSidebar', {
            url: '/sidebars/:sidebarId',
            templateUrl: 'admin.client.sidebarsEdit.view.html'
        });
}
