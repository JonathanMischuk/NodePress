var angular = require('angular');

module.exports = angular.module('pages')
    .config(adminPageRoutes);

function adminPageRoutes ($stateProvider, $urlRouterProvider) {
    'use strict';
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('pages', {
            url: '/pages/',
            templateUrl: 'admin.client.pages.view.html',
            controller: 'AdminGetPagesController as pages',
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query()
                }
            }
        })
        .state('newPage', {
            url: '/pages/new-page/',
            templateUrl: 'admin.client.pagesNew.view.html',
            controller: 'AdminNewPageController as page',
            resolve: {
                categories: function (AdminCategoriesAPIService) {
                    console.log(AdminCategoriesAPIService.query());
                    return AdminCategoriesAPIService.query();
                },
                sidebars: function (AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.query();
                }
            }
        })
        .state('editPage', {
            url: '/pages/:pageId',
            templateUrl: 'admin.client.pagesEdit.view.html',
            controller: 'AdminUpdatePageController as page',
            resolve: {
                page: function ($stateParams, AdminPagesAPIService) {
                    return AdminPagesAPIService.get({
                        pageId: $stateParams.pageId
                    });
                },
                categories: function (AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.query();
                },
                sidebars: function (AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.query();
                }
            }
        });
}
