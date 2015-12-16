'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminUpdateMenuController', AdminUpdateMenuController);

function AdminUpdateMenuController(
    $scope,
    $rootScope,
    $stateParams,
    AdminPagesAPIService,
    AdminMenusAPIService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.pages = addPropertiesToPagesModel();
    vm.menu = {};
    vm.menuItems = [];
    vm.menuItemsProxy = [];
    vm.getMenu = getMenu;
    vm.addMenuItemToProxy = addMenuItemToProxy;
    vm.addMenuItems = addMenuItems;
    vm.removeMenuItem = removeMenuItem;
    vm.updateMenu = updateMenu;
    vm.errorMessages = require('../errors/admin.client.menus.errors');

    function addPropertiesToPagesModel() {
        return AdminPagesAPIService.query(function (pages) {
            pages.forEach(function (page, i) {
                page.checked    = false;
                page.menuItemId = i;
            });

            return pages;
        });
    }

    function getMenu() {
        vm.menu = AdminMenusAPIService.get({
            menuId: $stateParams.menuId
        }, function () {
            vm.menuItems = vm.menu.items;
        });
    }

    function addMenuItemToProxy(page, menuItemId) {
        var index = vm.pages.indexOf(page);
        vm.pages[index].checked = !vm.pages[index].checked;

        if (vm.pages[index].checked === false) {
            for (var i = 0; i < vm.menuItemsProxy.length; i += 1) {
                if (vm.menuItemsProxy[i].menuItemId === menuItemId) {
                    vm.menuItemsProxy.splice(i, 1);
                }
            }
        } else {
            vm.menuItemsProxy.push({
                title: vm.pages[index].title,
                slug: vm.pages[index].slug,
                menuItemId: menuItemId
            });
        }
    }

    function addMenuItems() {
        angular.forEach(vm.menuItemsProxy, function (menuItem) {
            vm.menuItems.push(menuItem);
        });

        angular.forEach(vm.pages, function (page) {
            page.Selected = false;
            page.checked = false;
        });

        vm.menuItemsProxy = [];
    }

    function removeMenuItem(menuItem) {
        var index = vm.menuItems.indexOf(menuItem);
        vm.menuItems.splice(index, 1);
    }

    function updateMenu() {
        if ($scope.updateMenuForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            vm.menu.modifiedBy = $rootScope.auth.username;
            vm.menu.modifiedDate = date;

            vm.menu.$update()
                .then(function () {

                    vm.menuItems = vm.menu.items;

                    // display success dialog
                    Materialize.toast('Menu updated successfully', 4000, 'success');

                    $scope.updateMenuForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorTitle = error;
                });
        }
    }
}
