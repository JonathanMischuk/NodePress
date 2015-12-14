'use strict';

var models = require('../models');

// GET request: get single menu to edit
module.exports = function (req, res, next) {
    models.Menu.findById(req.params.menuId, function (err, menu) {
        if (err) return next(err);
        res.json(menu);
    });
};
