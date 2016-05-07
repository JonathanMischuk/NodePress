'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminGetMenusController', AdminGetMenusController);

function AdminGetMenusController(AdminMenusAPIService) {

    var vm = this;

    vm.menus      = {};
    vm.getMenus   = getMenus;
    vm.removeMenu = removeMenu;
    vm.setSelectedMenu = setSelectedMenu;
    vm.selectedMenu = null;

    function getMenus() {
        vm.menus = AdminMenusAPIService.query();
    }

    function removeMenu() {
        var index = vm.menus.indexOf(vm.selectedMenu);
        vm.selectedMenu.$remove();

        vm.menus.splice(index, 1);
        vm.selectedMenu = null;

        // display success dialog
        Materialize.toast('Menu removed successfully', 4000, 'success');
    }

    function setSelectedMenu (menu) {
        vm.selectedMenu = menu;
    }
}
