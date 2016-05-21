'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminNewFooterController', AdminNewFooterController);

function AdminNewFooterController (
    $scope,
    $location,
    $rootScope,
    AdminSidebarsAPIService,
    activePlugins,
    menus
) {

    var vm = this;

    vm.avaliableSidebarItems = activePlugins;
    vm.sidebar = {};
    vm.sidebarItems = [];
    vm.sidebarItemIds = [];
    vm.newSidebar = newSidebar;
    vm.addSidebarItem = addSidebarItem;
    vm.removeSidebarItem = removeSidebarItem;
    vm.counter = 0;
    vm.sortableOptions = {
        handle: '.sort-handle'
    };

    vm.data = {
        menus: menus
    };

    function addSidebarItem (index) {
        var sidebarItem = angular.copy(vm.avaliableSidebarItems[index]);

        vm.counter += 1;
        sidebarItem.id = vm.counter;
        vm.sidebarItems.push(sidebarItem);
    }

    function removeSidebarItem (sidebarItem) {
        var index = vm.sidebarItems.indexOf(sidebarItem);
        vm.sidebarItems.splice(index, 1);
    }

    function newSidebar () {
        vm.sidebar.createdBy = $rootScope.np.auth.user.username;
        vm.sidebar.items = vm.sidebarItems;

        if ($scope.newSidebarForm.$valid) {
            var Sidebar = new AdminSidebarsAPIService(vm.sidebar);

            Sidebar.$save()
                .then(function (sidebar) {

                    // display success dialog
                    Materialize.toast('Sidebar created!', 4000, 'success');

                    $location.path('/sidebars/' + sidebar._id);
                })
                .catch(function (error) {
                    console.log('error!');

                    //vm.errorTitle = error.data.errors.title || '';
                });
        }
    }
}
