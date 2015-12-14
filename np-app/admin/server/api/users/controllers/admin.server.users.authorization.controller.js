'use strict';

var models = require('../models');

// GET request: authorize user
module.exports = function (req, res) {
    models.User.find(function (err, users) {
        if (err) return res.status(400).send(err);
        if (!users) return new Error('No users found.');

        var auth = {
            exists: users.length,
            user: req.user || null
        };

        return res.send(auth);
    });
};
