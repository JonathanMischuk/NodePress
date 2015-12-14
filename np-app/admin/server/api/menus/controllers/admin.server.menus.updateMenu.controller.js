'use strict';

var models = require('../models');

// PUT request: update a menu
module.exports = function (req, res, next) {
    models.Menu.findByIdAndUpdate(req.params.menuId, req.body, function (err) {
        if (err) return next(err);
        res.json(req.body);
    });
};
