var angular = require('angular');

module.exports = angular.module('pages')
    .config(adminPageRoutes);

function adminPageRoutes ($stateProvider, $urlRouterProvider) {
    'use strict';
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('np.pages', {
            url: 'pages/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.pages.view.html',
                    controller: 'AdminGetPagesController as pages'
                }
            },
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query()
                }
            }
        })
        .state('np.newPage', {
            url: 'pages/new-page/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.pagesNew.view.html',
                    controller: 'AdminNewPageController as page'
                }
            },
            resolve: {
                categories: function (AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.query();
                },
                sidebars: function (AdminSidebarsAPIService) {
                    return AdminSidebarsAPIService.query();
                }
            }
        })
        .state('np.editPage', {
            url: 'pages/:pageId',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.pagesEdit.view.html',
                    controller: 'AdminUpdatePageController as page'
                }
            },
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
