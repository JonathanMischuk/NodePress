'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/plugins', controller.getPlugins);
    app.get('/api/plugins/active', controller.getActivePlugins);
};
