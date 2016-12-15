'use strict';

var models = require('../models');

// GET request: get all categories
module.exports = function (req, res, next) {
    models.Category.find()
        .sort('-modifiedDate')
        .exec(function (err, categories) {
            if (err) return next(err);

            res.json(categories);
        });
};
