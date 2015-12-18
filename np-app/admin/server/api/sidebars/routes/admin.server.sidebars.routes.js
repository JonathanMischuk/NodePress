'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/api/sidebars', controller.getSidebars);
};
