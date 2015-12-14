'use strict';

var models = require('../models');

// GET request: retrieve single user's information
module.exports = function (req, res, next) {
    models.User.findOne({ username: req.params.user }, function (err, user) {
        if (err) return next(err);
        user.password = undefined;
        res.json(user);
    });
};
