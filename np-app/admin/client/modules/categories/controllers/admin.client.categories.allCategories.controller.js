var angular = require('angular');

function AdminGetCategoriesController (
    AdminUserAuthenticationService,
    AdminCategoriesListService,
    categories
) {
    'use strict';

    var vm = this;

    AdminUserAuthenticationService();

    vm.acls = AdminCategoriesListService;
    vm.acls.setCategories(categories);
}

module.exports = angular.module('categories')
    .controller('AdminGetCategoriesController', AdminGetCategoriesController);
