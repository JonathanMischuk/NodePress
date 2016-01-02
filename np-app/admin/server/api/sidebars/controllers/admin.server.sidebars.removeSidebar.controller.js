'use strict';

var models = require('../models');

// DELETE request: remove a sidebar
module.exports = function (req, res, next) {
    models.Sidebar.findByIdAndRemove(req.params.sidebarId, function (err) {
        if (err) return next(err);
    });
};
