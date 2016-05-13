var angular = require('angular');

module.exports = angular.module('categories')
    .controller('AdminGetCategoriesController', AdminGetCategoriesController);

function AdminGetCategoriesController (
    AdminUserAuthenticationService,
    categories
) {
    'use strict';

    var vm = this;

    vm.categories = categories;
    vm.removeCategory = removeCategory;
    vm.setSelectedCategory = setSelectedCategory;
    vm.selectedCategory = null;

    AdminUserAuthenticationService();

    function removeCategory() {
        var index = vm.categories.indexOf(vm.selectedCategory);
        
        vm.selectedCategory.$remove(function () {
            vm.categories.splice(index, 1);
            vm.selectedCategory = null;

            // display success dialog
            Materialize.toast('Category removed successfully', 4000, 'success');
        });
    }

    function setSelectedCategory (category) {
        vm.selectedCategory = category;
    }
}
