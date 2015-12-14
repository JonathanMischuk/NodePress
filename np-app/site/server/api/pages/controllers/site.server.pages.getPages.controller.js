'use strict';

var api = require('../../../../../admin/server/api');

// GET request: get full list of pages
module.exports = function (req, res, next) {
    api.pagesAPI.models.Page.find(function (err, pages) {
        if (err) return next(err);
        res.json(pages);
    });
};
