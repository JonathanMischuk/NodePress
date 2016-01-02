'use strict';

var angular = require('angular');


module.exports = angular.module('menus')
    .controller('AdminNewSidebarController', AdminNewSidebarController);

function AdminNewSidebarController (
    $scope,
    $location,
    $rootScope,
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
    vm.newSidebar = newSidebar;
    vm.addSidebarItem = addSidebarItem;
    vm.removeSidebarItem = removeSidebarItem;
    vm.counter = 0;
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
        getSidebarCount();
    }

    function newSidebar () {
        vm.sidebar.createdBy = $rootScope.auth.username;
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
