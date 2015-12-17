'use strict';

var angular = require('angular');

module.exports = angular.module('categories')
    .controller('AdminNewCategoryController', AdminNewCategoryController);

function AdminNewCategoryController(
    $scope,
    $location,
    $rootScope,
    AdminCategoriesAPIService,
    AdminUserAuthenticationService) {

    var vm = this;

    vm.category    = {};
    vm.newCategory = newCategory;
    vm.errorTitle  = null;
    vm.errors = require('../errors/admin.client.categories.errors');

    AdminUserAuthenticationService();

    function newCategory() {
        if ($scope.newCategoryForm.$valid) {

            var Category = new AdminCategoriesAPIService({
                title: vm.category.title,
                createdBy: $rootScope.auth.username,
                description: vm.category.description,
                slug: vm.category.slug
            });

            Category.$save()
                .then(function (category) {
                    $location.path('/categories/' + category._id);
                })
                .catch(function (error) {
                    vm.errorTitle = error.data.errors.title;
                });
        }
    }
}
