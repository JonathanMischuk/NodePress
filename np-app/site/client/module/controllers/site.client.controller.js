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

    $scope.$on('pageData', function (_, page) {
        var _ = require('lodash'),
            sidebarLeftItems = page[1] ? page[1].items : '',
            sidebarRightItems = page[2] ? page[2].items : '';

        angular.forEach(np.sidebars.callbacks, function (sidebarItem) {
            sidebarItem(sidebarLeftItems, vm);
            sidebarItem(sidebarRightItems, vm);
        });

        if (sidebarLeftItems && !sidebarRightItems || !sidebarLeftItems && sidebarRightItems) {
            vm.sidebarContainerClass = 'sidebars-2-col'
        } else if (!sidebarLeftItems && !sidebarRightItems) {
            vm.sidebarContainerClass = 'sidebars-1-col'
        } else if (sidebarLeftItems !== '' && sidebarRightItems !== '') {
            vm.sidebarContainerClass = 'sidebars-3-col'
        }

        vm.page = page[0];
        vm.sidebarLeft = sidebarLeftItems;
        vm.sidebarRight = sidebarRightItems;
    });
}
