'use strict';

var models = require('../models');

// GET request: retrieve single page to edit
module.exports = function (req, res, next) {
    models.Page.findById(req.params.pageId, function (err, page) {
        if (err) return next(err);
        res.json(page);
    });
};
