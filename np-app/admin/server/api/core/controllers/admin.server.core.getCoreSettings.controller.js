'use strict';

var Core = require('../../core/models').Core;

// GET request: get core settings data
module.exports = function (req, res, next) {
    Core.find(function (err, core) {
        if (err) return next(err);
        res.json(core);
    });
};
