'use strict';

var angular = require('angular');

module.exports = angular.module('menus')
    .controller('AdminNewSidebarController', AdminNewSidebarController);

function AdminNewSidebarController (
    $scope,
    $location,
    $rootScope,
    AdminSidebarsAPIService,
    AdminSidebarOptionsService) {

    var vm = this;


    vm.sidebar = {};
    vm.sidebarOptions = AdminSidebarOptionsService;
    vm.sidebarItems = [];
    vm.sidebarItemsProxy = [];
    vm.addSidebarItemToProxy = addSidebarItemToProxy;
    vm.addSidebarItems = addSidebarItems;
    vm.removeSidebarItem = removeSidebarItem;
    vm.newSidebar = newSidebar;
    vm.errors = require('../errors/admin.client.sidebars.errors');

    function compileDOM () {
        $scope.$apply(function () {
            console.log('$scope.$apply()');
        });
    }

    function addSidebarItemToProxy (sidebar, sidebarItemId) {
        var index = vm.sidebarOptions.indexOf(sidebar);
        vm.sidebarOptions[index].checked = !vm.sidebarOptions[index].checked;

        if (vm.sidebarOptions[index].checked === false) {
            for (var i = 0; i < vm.sidebarItemsProxy.length; i += 1) {
                if (vm.sidebarItemsProxy[i].sidebarItemId === sidebarItemId) {
                    vm.sidebarItemsProxy.splice(i, 1);
                }
            }
        } else {
            vm.sidebarItemsProxy.push({
                title: vm.sidebarOptions[index].title,
                type: vm.sidebarOptions[index].type,
                attr: vm.sidebarOptions[index].attr,
                sidebarItemId: sidebarItemId
            });
        }
    }

    function addSidebarItems () {

        // add sidebar proxy items to sidebarItems array
        angular.forEach(vm.sidebarItemsProxy, function (sidebarItem) {
            vm.sidebarItems.push(sidebarItem);
        });

        angular.forEach(vm.sidebarOptions, function (sidebarOption) {
            sidebarOption.Selected = false;
            sidebarOption.checked = false;
        });

        vm.sidebarItemsProxy = [];
    }

    function removeSidebarItem (sidebarItem) {
        var index = vm.sidebarItems.indexOf(sidebarItem);
        vm.sidebarItems.splice(index, 1);
    }

    function newSidebar () {
        if ($scope.newSidebarForm.$valid) {
            var Sidebar = new AdminSidebarsAPIService({
                createdBy: $rootScope.auth.username,
                title: vm.sidebar.title,
                items: vm.sidebarItems
            });

            Sidebar.$save()
                .then(function (sidebar) {
                    $location.path('/sidebars/' + sidebar._id);
                })
                .catch(function (error) {
                    //vm.errorTitle = error.data.errors.title || '';
                });
        }
    }
}
