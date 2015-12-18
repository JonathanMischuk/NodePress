'use strict';

module.exports = function (app) {

    // admin core api routes
    require('../api').coreAPI.routes.endPoints(app);

    // admin users api routes
    require('../api').usersAPI.routes.endPoints(app);

    // admin pages api routes
    require('../api').pagesAPI.routes.endPoints(app);

    // admin menus api routes
    require('../api').menusAPI.routes.endPoints(app);

    // admin categories api routes
    require('../api').categoriesAPI.routes.endPoints(app);

    // admin sidebars api routes
    require('../api').sidebarsAPI.routes.endPoints(app);
};
