var angular = require('angular');

module.exports = angular.module('menus')
    .factory('AdminMenuService', AdminMenuService);

function AdminMenuService () {
    'use strict';

    var self = this;
    
    self.addMenuItemsToProxy = addMenuItemToProxy;

    function addMenuItemToProxy (page, menuItemId) {
        var index = vm.pages.indexOf(page);
        vm.pages[index].checked = !vm.pages[index].checked;

        if (vm.pages[index].checked === false) {
            for (var i = 0; i < vm.menuItemsProxy.length; i += 1) {
                if (vm.menuItemsProxy[i].menuItemId === menuItemId) {
                    vm.menuItemsProxy.splice(i, 1);
                }
            }
        } else {
            vm.menuItemsProxy.push({
                title: vm.pages[index].title,
                slug: vm.pages[index].slug,
                menuItemId: menuItemId
            });
        }
    }
    
    return self;
}
