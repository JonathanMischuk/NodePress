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
    vm.setSelectedCategory = setSelectedCategory;
    vm.selectedCategory = null;

    AdminUserAuthenticationService();

    function getCategories() {
        vm.categories = AdminCategoriesAPIService.query();
    }

    function removeCategory() {
        var index = vm.categories.indexOf(vm.selectedCategory);
        vm.selectedCategory.$remove();

        vm.categories.splice(index, 1);
        vm.selectedCategory = null;

        // display success dialog
        Materialize.toast('Category removed successfully', 4000, 'success');
    }

    function setSelectedCategory (category) {
        vm.selectedCategory = category;
    }
}
