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
    vm.addMenuItem = addMenuItem;
    vm.removeMenuItem = removeMenuItem;
    vm.newMenu = newMenu;
    vm.errors = require('../errors/admin.client.menus.errors');

    function addMenuItem (menuItem) {
        vm.menuItems.unshift({
            title: menuItem.title,
            slug: menuItem.slug,
            menuItemId: menuItem.menuItemId
        });
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
