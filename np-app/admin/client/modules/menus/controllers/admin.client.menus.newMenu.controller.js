var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminNewMenuController', AdminNewMenuController);

function AdminNewMenuController (
    $scope,
    $location,
    $rootScope,
    AdminMenusAPIService,
    pages
) {
    'use strict';

    var vm = this;

    vm.pages = pages;
    vm.menu = {};
    vm.menuItems = [];
    vm.menuItemsProxy = [];
    vm.addMenuItemToProxy = addMenuItemToProxy;
    vm.addMenuItems = addMenuItems;
    vm.removeMenuItem = removeMenuItem;
    vm.newMenu = newMenu;
    vm.errors = require('../errors/admin.client.menus.errors');

    function addMenuItemToProxy (page, menuItemId) {
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

    function addMenuItems () {
        angular.forEach(vm.menuItemsProxy, function (menuItem) {
            vm.menuItems.push(menuItem);
        });

        angular.forEach(vm.pages, function (page) {
            page.Selected = false;
            page.checked = false;
        });

        vm.menuItemsProxy = [];
    }

    function removeMenuItem (menuItem) {
        var index = vm.menuItems.indexOf(menuItem);
        vm.menuItems.splice(index, 1);
    }

    function newMenu() {
        if ($scope.newMenuForm.$valid) {
            var Menu = new AdminMenusAPIService({
                createdBy: $rootScope.np.auth.user.username,
                title: vm.menu.title,
                items: vm.menuItems
            });

            Menu.$save()
                .then(function (menu) {

                    // display success dialog
                    Materialize.toast('Menu created!', 4000, 'success');

                    $location.path('/menus/' + menu._id);
                })
                .catch(function (error) {
                    vm.errorTitle = error.data.errors.title || '';
                });
        }
    }
}
