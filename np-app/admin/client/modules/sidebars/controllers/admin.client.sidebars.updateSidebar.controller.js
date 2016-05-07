var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminUpdateSidebarController', AdminUpdateSidebarController);

function AdminUpdateSidebarController (
    $scope,
    $rootScope,
    AdminUtilitiesServices,
    sidebar
) {
    'use strict';

    var vm = this;

    vm.avaliableSidebarItems = $rootScope.np.settings.pluginsConfig;
    vm.sidebar = sidebar;
    vm.sidebarItems = vm.sidebar.items;
    vm.sidebarItemIds = [];
    vm.counter = getSidebarCount();
    vm.updateSidebar = updateSidebar;
    vm.addSidebarItem = addSidebarItem;
    vm.removeSidebarItem = removeSidebarItem;
    vm.sortableOptions = {
        handle: '.sort-handle'
    };

    function getSidebarCount () {
        angular.forEach(vm.sidebarItems, function (sidebarItem) {
            vm.sidebarItemIds.push(sidebarItem.id);
        });

        return Math.max.apply(null, vm.sidebarItemIds) || 0;
    }

    function addSidebarItem (index) {
        var sidebarItem = angular.copy(vm.avaliableSidebarItems[index]);

        vm.counter += 1;
        sidebarItem.id = vm.counter;
        vm.sidebarItems.push(sidebarItem);
    }

    function removeSidebarItem (sidebarItem) {
        var index = vm.sidebarItems.indexOf(sidebarItem);
        
        vm.sidebarItems.splice(index, 1);
        vm.counter = getSidebarCount();
    }

    function updateSidebar () {
        vm.sidebar.items = vm.sidebarItems;

        if ($scope.updateSidebarForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            vm.sidebar.modifiedBy = $rootScope.np.auth.user.username;
            vm.sidebar.modifiedDate = date;

            vm.sidebar.$update()
                .then(function () {

                    vm.sidebarItems = vm.sidebar.items;

                    // display success dialog
                    Materialize.toast('Sidebar updated successfully', 4000, 'success');

                    $scope.updateSidebarForm.$setPristine();
                })
                .catch(function (error) {
                    vm.errorTitle = error;
                });
        }
    }
}
