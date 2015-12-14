'use strict';

var models = require('../models'),
    bcrypt = require('bcrypt-nodejs');

// POST request: create new user
module.exports = function (req, res, next) {
    var user = new models.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password
    });

    // encrypt password before it reaches the db
    bcrypt.hash(req.body.password, null, null, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        user.save(function (err, user) {
            if (err) return res.status(400).send(err);
            res.json(user);
        });
    });
};
