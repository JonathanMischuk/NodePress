'use strict';

var models = require('../models');

// PUT request: update a page
module.exports = function (req, res, next) {
    models.Page.findByIdAndUpdate(req.params.pageId, req.body, function (err, page) {
        if (err) return res.status(400).send(err);
        res.json(req.body);
    });
};
