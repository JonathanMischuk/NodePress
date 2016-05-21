'use strict';

var api = require('../api');

module.exports = function (app) {
    
    // admin core api routes
    api.coreAPI.routes.endPoints(app);

    // admin users api routes
    api.usersAPI.routes.endPoints(app);

    // admin pages api routes
    api.pagesAPI.routes.endPoints(app);

    // admin menus api routes
    api.menusAPI.routes.endPoints(app);

    // admin categories api routes
    api.categoriesAPI.routes.endPoints(app);

    // admin sidebars api routes
    api.sidebarsAPI.routes.endPoints(app);

    // admin plugins api routes
    api.pluginsAPI.routes.endPoints(app);
};
