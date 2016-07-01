'use strict';

module.exports = function (app) {
    var controller = require('../controllers'),
        coreController = require('../../core/controllers');

    //
    app.get('/sidebars/:sidebar', controller.getSidebarLeft);

    // load core template and settings
    //app.get('/:page', coreController.loadCoreTemplate);
};
