var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminGetMenusController', AdminGetMenusController);

function AdminGetMenusController (
    menus
) {
    'use strict';

    var vm = this;

    vm.menus = menus;
    vm.removeMenu = removeMenu;
    vm.setSelectedMenu = setSelectedMenu;
    vm.selectedMenu = null;

    function removeMenu() {
        var index = vm.menus.indexOf(vm.selectedMenu);
        
        vm.selectedMenu.$remove(function () {
            vm.menus.splice(index, 1);
            vm.selectedMenu = null;

            // display success dialog
            Materialize.toast('Menu removed successfully', 4000, 'success');
        });
    }

    function setSelectedMenu (menu) {
        vm.selectedMenu = menu;
    }
}
