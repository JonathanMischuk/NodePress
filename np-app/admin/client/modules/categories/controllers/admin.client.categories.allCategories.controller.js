'use strict';

var angular = require('angular');

module.exports = angular.module('categories')
    .controller('AdminGetCategoriesController', AdminGetCategoriesController);

function AdminGetCategoriesController (
    AdminCategoriesAPIService,
    AdminUserAuthenticationService) {

    var vm = this;

    vm.categories     = {};
    vm.getCategories  = getCategories;
    vm.removeCategory = removeCategory;

    AdminUserAuthenticationService();

    function getCategories() {
        vm.categories = AdminCategoriesAPIService.query();
    }

    // TODO: find it's own home
    function removeCategory(category) {
        var index = vm.categories.indexOf(category);
        category.$remove();

        vm.categories.splice(index, 1);
    }
}
