'use strict';

var models = require('../models');

// GET request: retrieve all pages
module.exports = function (req, res, next) {
    models.Page.find(function (err, pages) {
        if (err) return next(err);
        res.json(pages);
    });
};
