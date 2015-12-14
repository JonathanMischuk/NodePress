'use strict';

var models = require('../models');

// GET request: get single category to edit
module.exports = function (req, res, next) {
    models.Category.findById(req.params.categoryId, function (err, category) {
        if (err) return next(err);
        res.json(category);
    });
};
