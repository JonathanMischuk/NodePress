var angular = require('angular');

function adminCategoryRoutes (
    $stateProvider, 
    $urlRouterProvider
) {
    'use strict';
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('np.categories', {
            url: '^/categories/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.categories.view.html',
                    controller: 'AdminGetCategoriesController as ctrl'
                }
            },            
            resolve: {
                categories: function (AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.query();
                }
            }
        })
        .state('np.newCategory', {
            url: '^/categories/new-category/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.categoriesNew.view.html',
                    controller: 'AdminNewCategoryController as ctrl'
                }
            },
            resolve: {
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query();
                }
            }
        })
        .state('np.editCategory', {
            url: '^/categories/:categoryId',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.categoriesEdit.view.html',
                    controller: 'AdminUpdateCategoryController as ctrl'
                }
            },
            resolve: {
                category: function ($stateParams, AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.get({
                        categoryId: $stateParams.categoryId
                    });
                },
                pages: function (AdminPagesAPIService) {
                    return AdminPagesAPIService.query();
                }
            }
        })
}

module.exports = angular.module('categories')
    .config(adminCategoryRoutes);
