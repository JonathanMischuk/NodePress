'use strict';

var angular = require('angular');

module.exports = angular.module('pages')
    .config(adminPageRoutes);

function adminPageRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('pages', {
            url: '/pages/',
            templateUrl: 'admin.client.pages.view.html'
        })
        .state('newPage', {
            url: '/new-page/',
            templateUrl: 'admin.client.pagesNew.view.html'
        })
        .state('editPage', {
            url: '/pages/:pageId',
            templateUrl: 'admin.client.pagesEdit.view.html'
        });
}
