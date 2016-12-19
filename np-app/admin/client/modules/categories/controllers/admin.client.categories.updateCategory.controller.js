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

    vm.acus = AdminCategoriesUpdateService;
    vm.acus.setPages(pages);
    vm.acus.setCategory(category);
}

module.exports = angular.module('categories')
    .controller('AdminUpdateCategoryController', AdminUpdateCategoryController);
