'use strict';

var Core = require('../../core/models').Core;

// MIDDLEWARE: setup initial core settings
module.exports = function (req, res, next) {
    Core.find(function (err, core) {
        if (err) return next(err);
        if (!core.length) {
            core = new Core();

            core.save(function (err) {
                if (err) return res.status(400).send(err);
                return next();
            });
        }

        next();
    });
};
