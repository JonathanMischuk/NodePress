'use strict';

var models = require('../models');

// DELETE request: delete user account
module.exports = exports.removeUser = function (req, res, next) {
    models.User.findOneAndRemove({ username: req.params.user },
        function (err) {
            if (err) return next(err);
        });
};
