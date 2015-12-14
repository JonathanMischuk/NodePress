'use strict';

var models = require('../models');

// POST request: create new menu
module.exports = function (req, res, next) {
    var menu = new models.Menu({
        createdBy: req.body.createdBy,
        title: req.body.title,
        items: req.body.items
    });

    menu.save(function (err, menu) {
        if (err) return next(err);
        res.json(menu);
    });
};
