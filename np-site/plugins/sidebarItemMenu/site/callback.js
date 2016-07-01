var sidebarItemMenuAugmentation = function sidebarItemMenuAugmentation (sidebarItems, vm) {
    'use strict';

    sidebarItems.forEach(function (sidebarItem) {
        if (sidebarItem.type === 'menu') {
            if (sidebarItem.model.body !== '') {
                sidebarItem.model.body = _.filter(
                    vm.menus, _.matches({'title': sidebarItem.model.body})
                )[0].items;
            }
        }
    });
};

np.sidebars.callbacks.push(sidebarItemMenuAugmentation);
