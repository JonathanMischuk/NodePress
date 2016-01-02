'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .controller('AdminGetSidebarsController', AdminGetSidebarsController);

function AdminGetSidebarsController (AdminSidebarsAPIService) {

    var vm = this;

    vm.sidebars = {};
    vm.removeSidebar = removeSidebar;

    vm.sidebars = AdminSidebarsAPIService.query();

    // TODO: find it's own home
    function removeSidebar(sidebar) {
        var index = vm.sidebars.indexOf(sidebar);
        sidebar.$remove();

        vm.sidebars.splice(index, 1);
    }
}

