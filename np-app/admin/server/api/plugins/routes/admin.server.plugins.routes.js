'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/plugins', controller.getPlugins);
};
