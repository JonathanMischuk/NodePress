'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminGetMenusController', AdminGetMenusController);

function AdminGetMenusController(AdminMenusAPIService) {

    var vm = this;

    vm.menus      = {};
    vm.getMenus   = getMenus;
    vm.removeMenu = removeMenu;

    function getMenus() {
        vm.menus = AdminMenusAPIService.query();
    }

    // TODO: find it's own home
    function removeMenu(menu) {
        var index = vm.menus.indexOf(menu);
        menu.$remove();

        vm.menus.splice(index, 1);
    }
}
