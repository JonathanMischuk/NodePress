'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/sidebars', controller.getSidebars);
    app.post('/api/sidebars', controller.newSidebar);
    app.get('/api/sidebars/:sidebarId', controller.getSidebar);
    app.put('/api/sidebars/:sidebarId', controller.updateSidebar);
    app.delete('/api/sidebars/:sidebarId', controller.removeSidebar);
};
