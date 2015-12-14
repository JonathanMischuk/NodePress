'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/menus', controller.getMenus);
    app.post('/api/menus', controller.newMenu);
    app.get('/api/menus/:menuId', controller.getMenu);
    app.put('/api/menus/:menuId', controller.updateMenu);
    app.delete('/api/menus/:menuId', controller.removeMenu);

    app.get('/api/menuLocations', controller.getMenuLocations);
    app.put('/api/menuLocations', controller.updateMenuLocations);
    app.delete('/api/menuLocations/:menuLocationsId', controller.removeMenuLocations);
};
