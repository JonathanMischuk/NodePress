'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .controller('AdminGetSidebarsController', AdminGetSidebarsController);

function AdminGetSidebarsController (AdminSidebarsAPIService) {

    var vm = this;

    vm.sidebars = {};
    vm.removeSidebar = removeSidebar;
    vm.setSelectedSidebar = setSelectedSidebar;
    vm.selectedSidebar = null;

    vm.sidebars = AdminSidebarsAPIService.query();

    function removeSidebar() {
        var index = vm.sidebars.indexOf(vm.selectedSidebar);
        vm.selectedSidebar.$remove();

        vm.sidebars.splice(index, 1);
        vm.selectedSidebar = null;

        // display success dialog
        Materialize.toast('Sidebar removed successfully', 4000, 'success');
    }

    function setSelectedSidebar (sidebar) {
        vm.selectedSidebar = sidebar;
    }
}

