var angular = require('angular');

function AdminNewCategoryController (
    AdminCategoriesNewService,
    AdminUserAuthenticationService,
    pages
) {
    'use strict';

    var vm = this;

    AdminUserAuthenticationService();

    vm.acns = AdminCategoriesNewService;
    vm.acns.setPages(pages);
}

module.exports = angular.module('categories')
    .controller('AdminNewCategoryController', AdminNewCategoryController);
