'use strict';

var api = require('../../../../../admin/server/api');

// GET request: get single page content
module.exports = function (req, res, next) {
    api.pagesAPI.models.Page.findOne({ slug: req.params.page },
        function (err, page) {
            if (err) return next(err);
            res.json(page);
        });
};
