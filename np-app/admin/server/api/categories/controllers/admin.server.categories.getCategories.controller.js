'use strict';

var models = require('../models');

// GET request: get all categories
module.exports = function (req, res, next) {
    models.Category.find(function (err, categories) {
        if (err) return next(err);
        res.json(categories);
    });
};
