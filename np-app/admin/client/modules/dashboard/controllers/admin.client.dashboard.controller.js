var angular = require('angular');

module.exports = angular.module('dashboard')
    .controller('AdminDashboardController', AdminDashboardController);

function AdminDashboardController (
    AdminUtilitiesServices,
    pages,
    categories,
    menus,
    sidebars,
    componentsDashboard
) {
    'use strict';

    var vm = this,
        items = [
            pages,
            categories,
            menus,
            sidebars
        ];

    vm.dashboardItems = componentsDashboard;

    angular.forEach(vm.dashboardItems, function (item, i) {
        item.items = items[i];
    });

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');
}
