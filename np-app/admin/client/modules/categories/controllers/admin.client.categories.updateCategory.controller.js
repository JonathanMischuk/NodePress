var angular = require('angular');

function AdminUpdateCategoryController (
    AdminUserAuthenticationService,
    AdminCategoriesUpdateService,
    category,
    pages
) {
    'use strict';

    AdminUserAuthenticationService();

    var vm = this;

    //console.log(category);

    vm.acus = AdminCategoriesUpdateService;
    vm.acus.setPages(pages);
    vm.acus.setCategory(category);
    vm.children = vm.acus.getCategoryChildrenName(category);

    vm.active = true;

    console.log(vm.children);
}

module.exports = angular.module('categories')
    .controller('AdminUpdateCategoryController', AdminUpdateCategoryController);
