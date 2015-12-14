'use strict';

var angular = require('angular');

module.exports = angular.module('categories')
    .config(adminCategoryRoutes);

function adminCategoryRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('categories', {
            url: '/categories/',
            templateUrl: 'admin.client.categories.view.html'
        })
        .state('newCategory', {
            url: '/new-category/',
            templateUrl: 'admin.client.categoriesNew.view.html'
        })
        .state('editCategory', {
            url: '/categories/:categoryId',
            templateUrl: 'admin.client.categoriesEdit.view.html'
        })
}
