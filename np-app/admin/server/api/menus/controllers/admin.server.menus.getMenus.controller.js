'use strict';

var models = require('../models');

// GET request: retrieve all menus
module.exports = function (req, res, next) {
    models.Menu.find().sort('-modifiedDate').exec(function (err, menus) {
        if (err) return next(err);
        
        res.json(menus);
    });
};
