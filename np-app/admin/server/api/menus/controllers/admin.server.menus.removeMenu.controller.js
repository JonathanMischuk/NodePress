'use strict';

var models = require('../models');

// DELETE request: remove a menu
module.exports = function (req, res, next) {
    models.Menu.findByIdAndRemove(req.params.menuId, function (err) {
        if (err) return next(err);
    });
};
