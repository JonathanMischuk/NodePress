var angular = require('angular');

module.exports = angular.module('dashboard')
    .controller('AdminDashboardController', AdminDashboardController);

function AdminDashboardController (
    AdminUtilitiesServices,
    AdminDashboardItemsService,
    pages,
    categories,
    menus,
    sidebars,
    $http
) {
    'use strict';

    var vm = this,
        items = [
            pages,
            categories,
            menus,
            sidebars
        ];

    vm.pages = pages;
    vm.categories = categories;
    vm.menus = menus;
    vm.sidebars = sidebars;
    vm.dashboardItems = AdminDashboardItemsService;

    angular.forEach(vm.dashboardItems, function (item, i) {
        item.items = items[i];
    });

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');

    /*$http.get('/api/components').then(function (response) {

        console.log(response.data);
    })*/
}
