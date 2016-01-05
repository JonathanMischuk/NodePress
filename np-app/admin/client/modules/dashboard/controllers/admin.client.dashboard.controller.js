'use strict';

var angular = require('angular');

module.exports = angular.module('dashboard')
    .controller('AdminDashboardController', AdminDashboardController);

function AdminDashboardController(
    AdminPagesAPIService,
    AdminCategoriesAPIService,
    AdminUsersAPIService,
    AdminMenusAPIService,
    AdminSidebarsAPIService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.pages = AdminPagesAPIService.query();
    vm.categories = AdminCategoriesAPIService.query();
    vm.users = AdminUsersAPIService.query();
    vm.menus = AdminMenusAPIService.query();
    vm.sidebars = AdminSidebarsAPIService.query();

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');
}
