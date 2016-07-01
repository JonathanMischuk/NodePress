'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .controller('SiteSidebarLeftController', SiteSidebarLeftController);

function SiteSidebarLeftController ($rootScope, sidebarLeft) {
    var vm = this;

    vm.coreSettings = $rootScope.coreSettings;
    vm.primaryMenu = $rootScope.primaryMenu;
    vm.secondaryMenu = $rootScope.secondaryMenu;
    vm.menus = $rootScope.menus;
    vm.pages = $rootScope.pages;

    console.log(sidebarLeft);

    /*SiteSidebarItemsService.getSidebarLeft().then(function (response) {
        console.log(response);
    });*/

    

    //console.log('SiteSidebarLeftController in action');

    /*sidebarItems.forEach(function (sidebarItem) {
        if (sidebarItem.type === 'menu') {
            if (sidebarItem.model.body !== '') {
                sidebarItem.model.body = _.filter(
                    vm.menus, _.matches({'title': sidebarItem.model.body})
                )[0].items;
            }
        }
    });*/
}
