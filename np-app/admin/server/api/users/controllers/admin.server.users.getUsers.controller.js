'use strict';

var models = require('../models');

// GET request: retrieve all user information
module.exports = function (req, res, next) {
    models.User.find(function (err, users) {
        if (err) return next(err);

        users.forEach(function (user) {
            user.password = undefined;
        });

        res.json(users);
    });
};
