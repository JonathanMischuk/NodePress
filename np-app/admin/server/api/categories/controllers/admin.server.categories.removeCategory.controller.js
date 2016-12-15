'use strict';

var models = require('../models');

// DELETE request: remove a category
module.exports = function (req, res, next) {
    models.Category.findByIdAndRemove(
        req.params.categoryId,
        function (err) {
            if (err) return next(err);

            return res.sendStatus(201);
        });
};
