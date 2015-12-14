'use strict';

var models = require('../models');

// POST request: create new page
module.exports = function (req, res) {
    var page = new models.Page({
        createdBy: req.body.createdBy,
        slug: req.body.slug,
        title: req.body.title,
        category: req.body.category,
        body: req.body.body
    });

    page.save(function (err, page) {
        if (err) return res.status(400).send(err);
        res.json(page);
    });
};
