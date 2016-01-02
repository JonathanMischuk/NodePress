'use strict';

var angular = require('angular');


module.exports = angular.module('menus')
    .controller('AdminUpdateSidebarController', AdminUpdateSidebarController);

function AdminUpdateSidebarController (
    $scope,
    $rootScope,
    $stateParams,
    AdminSidebarsAPIService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.avaliableSidebarItems = [
        {
            title: 'HTML Content',
            slug: 'html-content',
            type: 'HTMLContent',
            description: 'Add HTML content to your sidebar',
            directive: 'sidebarItemHtmlContent',
            directiveSlug: 'sidebar-item-html-content',
            model: {
                title: '',
                body: ''
            },
            icon: 'code'
        },
        {
            title: 'Menu',
            slug: 'menu',
            type: 'menu',
            description: 'Add a menu to your sidebar',
            directive: 'sidebarItemMenu',
            directiveSlug: 'sidebar-item-menu',
            model: {
                title: '',
                body: ''
            },
            icon: 'toc'
        }
    ];

    vm.sidebar = {};
    vm.sidebarItems = [];
    vm.sidebarItemIds = [];
    vm.updateSidebar = updateSidebar;
    vm.addSidebarItem = addSidebarItem;
    vm.removeSidebarItem = removeSidebarItem;
    vm.getSidebar = getSidebar;
    vm.sortableOptions = {
        handle: '.sort-handle'
    };

    function getSidebarCount () {
        angular.forEach(vm.sidebarItems, function (sidebarItem) {
            vm.sidebarItemIds.push(sidebarItem.id);
        });

        vm.counter = Math.max.apply(null, vm.sidebarItemIds) || 0;
    }

    function getSidebar () {
        vm.sidebar = AdminSidebarsAPIService.get({
            sidebarId: $stateParams.sidebarId
        }, function () {
            vm.sidebarItems = vm.sidebar.items;
            getSidebarCount();
        });
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
        getSidebarCount();
    }

    function updateSidebar () {
        vm.sidebar.items = vm.sidebarItems;

        if ($scope.updateSidebarForm.$valid) {

            // create human readable date for modified date
            var date = AdminUtilitiesServices.createHumanReadableDate();

            vm.sidebar.modifiedBy = $rootScope.auth.username;
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
