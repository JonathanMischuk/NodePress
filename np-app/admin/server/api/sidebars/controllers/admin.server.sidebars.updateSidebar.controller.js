'use strict';

var models = require('../models');

// PUT request: update a sidebar
module.exports = function (req, res, next) {
    models.Sidebar.findByIdAndUpdate(req.params.sidebarId, req.body, function (err) {
        if (err) return next(err);
        
        res.json(req.body);
    });
};
