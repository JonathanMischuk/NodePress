'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .controller('SiteController', SiteController);

function SiteController ($scope, $rootScope) {
    var vm = this;

    vm.coreSettings = $rootScope.coreSettings;
    vm.primaryMenu = $rootScope.primaryMenu;
    vm.secondaryMenu = $rootScope.secondaryMenu;
    vm.menus = $rootScope.menus;
    vm.pages = $rootScope.pages;

    vm.sidebars = {
        left: true,
        right: true
    };

    $scope.$on('pageData', function (_, page) {
        var _ = require('lodash'),
            sidebarLeftItems = page[1].items,
            sidebarRightItems = page[2].items;

        angular.forEach(sidebarLeftItems, function (sidebarItem, i) {
            if (sidebarItem.type === 'menu') {
                if (sidebarItem.model.body !== '') {
                    sidebarItem.model.body = _.filter(vm.menus, _.matches({'title': sidebarItem.model.body}))[0].items;
                }
            }
        });

        angular.forEach(sidebarRightItems, function (sidebarItem, i) {
            if (sidebarItem.type === 'menu') {
                if (sidebarItem.model.body !== '') {
                    sidebarItem.model.body = _.filter(vm.menus, _.matches({ 'title': sidebarItem.model.body }))[0].items;
                }
            }
        });

        vm.page = page[0];
        vm.sidebarLeft = sidebarLeftItems;
        vm.sidebarRight = sidebarRightItems;
    });
}
