'use strict';

module.exports = {
    getMenu: require('./admin.server.menus.getMenu.controller'),
    getMenus: require('./admin.server.menus.getMenus.controller'),
    getMenuLocations: require('./admin.server.menus.getMenuLocations.controller'),
    newMenu: require('./admin.server.menus.newMenu.controller'),
    removeMenu: require('./admin.server.menus.removeMenu.controller'),
    removeMenuLocations: require('./admin.server.menus.removeMenuLocations.controller'),
    updateMenu: require('./admin.server.menus.updateMenu.controller'),
    updateMenuLocations: require('./admin.server.menus.updateMenuLocations.controller'),
};
