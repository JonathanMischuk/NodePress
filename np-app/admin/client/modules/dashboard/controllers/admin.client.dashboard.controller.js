var angular = require('angular');

module.exports = angular.module('dashboard')
    .controller('AdminDashboardController', AdminDashboardController);

function AdminDashboardController (
    AdminUtilitiesServices,
    AdminComponentsService,
    pages,
    categories,
    menus,
    sidebars,
    components
) {
    'use strict';

    var vm = this,
        items = [
            pages,
            categories,
            menus,
            sidebars
        ],
        data = {
            components: components,
            section: 'dashboard'
        };

    vm.dashboardItems = AdminComponentsService.getComponentsAttributes(
        AdminComponentsService.getComponentsBySection(data)
    );

    angular.forEach(vm.dashboardItems, function (item, i) {
        item.items = items[i];
    });

    // create host url to view front end page
    vm.frontEndURL = AdminUtilitiesServices.createHostURL('/');
}
