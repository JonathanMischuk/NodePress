var angular = require('angular');

module.exports = angular.module('categories')
    .config(adminCategoryRoutes);

function adminCategoryRoutes (
    $stateProvider, 
    $urlRouterProvider
) {
    'use strict';
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('categories', {
            url: '/categories/',
            templateUrl: 'admin.client.categories.view.html',
            controller: 'AdminGetCategoriesController as categories',
            resolve: {
                categories: function (AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.query();
                }
            }
        })
        .state('newCategory', {
            url: '/new-category/',
            templateUrl: 'admin.client.categoriesNew.view.html'
        })
        .state('editCategory', {
            url: '/categories/:categoryId',
            templateUrl: 'admin.client.categoriesEdit.view.html',
            controller: 'AdminUpdateCategoryController as category',
            resolve: {
                category: function ($stateParams, AdminCategoriesAPIService) {
                    return AdminCategoriesAPIService.get({
                        categoryId: $stateParams.categoryId
                    });
                }
            }
        })
}
