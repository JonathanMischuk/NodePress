'use strict';

var models = require('../models');

// PUT request: update a category
module.exports = function (req, res) {
    models.Category.findByIdAndUpdate(req.params.categoryId, req.body,
        function (err) {
            if (err) return res.status(400).send(err);
            res.json(req.body);
        });
};
