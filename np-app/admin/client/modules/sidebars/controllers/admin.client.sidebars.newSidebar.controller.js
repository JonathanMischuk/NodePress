'use strict';

var angular = require('angular');


module.exports = angular.module('menus')
    .controller('AdminNewSidebarController', AdminNewSidebarController);

function AdminNewSidebarController (
    $scope,
    $location,
    $rootScope,
    AdminSidebarsAPIService,
    AdminMenusAPIService,
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
    vm.newSidebar = newSidebar;
    vm.addSidebarItem = addSidebarItem;
    vm.removeSidebarItem = removeSidebarItem;
    vm.menus = AdminMenusAPIService.query();
    vm.counter = 0;
    vm.sortableOptions = {
        handle: '.sort-handle'
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
        angular.forEach(vm.sidebarItems, function (sidebar, i) {
            //console.log(sidebar);
        });

        //vm.sidebar.title = vm.sidebar.title;
        vm.sidebar.createdBy = $rootScope.auth.username;
        vm.sidebar.items = vm.sidebarItems;

        console.log(vm.sidebar);

        if ($scope.newSidebarForm.$valid) {
            var Sidebar = new AdminSidebarsAPIService(vm.sidebar);

            Sidebar.$save()
                .then(function (sidebar) {
                    console.log('saved!');

                    //$location.path('/sidebars/' + sidebar._id);
                })
                .catch(function (error) {
                    console.log('error!');

                    //vm.errorTitle = error.data.errors.title || '';
                });
        }
    }
}
