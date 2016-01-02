'use strict';

var models = require('../models');

// GET request: get single sidebar to edit
module.exports = function (req, res, next) {
    models.Sidebar.findById(req.params.sidebarId, function (err, sidebar) {
        if (err) return next(err);
        res.json(sidebar);
    });
};
