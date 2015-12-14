'use strict';

module.exports = function (app) {
    var controller = require('../controllers'),
        coreController = require('../../core/controllers');

    app.get('/pages', controller.getPages);
    app.get('/pages/:page', controller.getPage);

    // load core template and settings
    app.get('/:page', coreController.loadCoreTemplate);
};
