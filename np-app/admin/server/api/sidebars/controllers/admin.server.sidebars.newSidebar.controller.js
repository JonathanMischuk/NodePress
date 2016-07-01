'use strict';

var models = require('../models');

// POST request: create new menu
module.exports = function (req, res, next) {
    var sidebar = new models.Sidebar(req.body);

    sidebar.save(function (err, sidebar) {
        if (err) return next(err);
        
        res.json(sidebar);
    });
};
