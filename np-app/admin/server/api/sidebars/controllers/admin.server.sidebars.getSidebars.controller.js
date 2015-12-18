'use strict';

var models = require('../models');

// GET request: retrieve all sidebars
module.exports = function (req, res, next) {
    models.Sidebar.find(function (err, sidebars) {
        if (err) return next(err);
        res.json(sidebars);
    });
};
