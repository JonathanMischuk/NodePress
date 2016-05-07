var angular = require('angular');

module.exports = angular.module('dashboard')
    .controller('AdminDashboardController', AdminDashboardController);

function AdminDashboardController (
    AdminUtilitiesServices,
    pages,
    categories,
    users,
    menus,
    sidebars
) {
    'use strict';

    var vm = this;

    vm.pages = pages;
    vm.categories = categories;
    vm.users = users;
    vm.menus = menus;
    vm.sidebars = sidebars;

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');
}
