'use strict';

var models = require('../models');

// PUT request: update a user
module.exports = function (req, res, next) {
    models.User.findOne({ username: req.params.user }, function (err, user) {
        if (err) return next(err);

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.role = req.body.role;
        user.modifiedDate = req.body.modifiedDate;

        user.save(function (err) {
            if (err) return res.status(400).send(err);
            res.json(user);
        });
    });
};
