'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    // load core template and settings
    app.get('*', controller.loadCoreTemplate);
};
