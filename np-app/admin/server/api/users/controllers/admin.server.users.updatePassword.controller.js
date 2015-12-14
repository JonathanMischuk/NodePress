'use strict';

var models = require('../models'),
    bcrypt = require('bcrypt-nodejs');

// PUT request: update a user
module.exports = function (req, res, next) {
    models.User.findOne({ username: req.params.user }, function (err, user) {
        if (err) return next(err);

        bcrypt.hash(req.body.password, null, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            user.save(function (err) {
                if (err) return res.status(400).send(err);
                res.sendStatus(201);
            });
        });
    });
};
