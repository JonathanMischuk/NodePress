'use strict';

var models = require('../models');

// PUT request: update menu locations
module.exports = function (req, res, next) {
    models.MenuLocations.find(function (err, menuLocations) {
        if (err) return next(err);
        res.json(menuLocations);
    });
};
