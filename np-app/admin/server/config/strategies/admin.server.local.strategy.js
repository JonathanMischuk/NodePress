'use strict';

var passport = require('passport'),
    bcrypt = require('bcrypt-nodejs'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../../api').usersAPI.models.User;

module.exports = function () {
    passport.use(new LocalStrategy(function (username, password, done) {

        User.findOne({ username: username }, function (err, user) {
            if (err) return done(err);
            if (!user) {
                return done(null, false, {
                    message: 'Invalid username',
                    field: 'username'
                });
            }

            bcrypt.compare(password, user.password, function (err, valid) {
                if (err) return done(err);
                if (!valid) {
                    return done(null, false, {
                        message: 'Incorrect password',
                        field: 'password'
                    });
                }

                return done(null, user);
            });
        });
    }));
};