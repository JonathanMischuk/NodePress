'use strict';

var models = require('../models');

// DELETE request: remove a page
module.exports = function (req, res, next) {
    models.Page.findByIdAndRemove(req.params.pageId, function (err) {
        if (err) return next(err);
    });
};
