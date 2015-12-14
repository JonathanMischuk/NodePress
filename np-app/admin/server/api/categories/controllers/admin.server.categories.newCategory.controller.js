'use strict';

var models = require('../models');

// POST request: create new category
module.exports = function (req, res) {
    var category = new models.Category({
        createdBy: req.body.createdBy,
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description
    });

    category.save(function (err, category) {
        if (err) return res.status(400).send(err);
        res.json(category);
    });
};
