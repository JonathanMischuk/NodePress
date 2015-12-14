'use strict';

var passport = require('passport');

// POST request: log in
module.exports = function (req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) return res.status(400).send(info);
        if (!user) return res.status(400).send(info);

        user.password = undefined;

        req.login(user, function(err) {
            if (err) return res.status(400).send(err);
            res.json(user);
        });
    })(req, res, next);
};
