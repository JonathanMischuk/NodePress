'use strict';

module.exports = function (app) {
    var controller = require('../controllers');

    app.get('/auth', controller.authorization);
    app.post('/auth/login', controller.login);
    app.get('/auth/logout', controller.logout);

    app.get('/api/users', controller.getUsers);
    app.post('/api/users/:user', controller.newUser);
    app.get('/api/users/:user', controller.getUser);
    app.put('/api/users/:user', controller.updateUser);
    app.delete('/api/users/:user', controller.removeUser);
    app.put('/api/users/:user/password', controller.updatePassword);
};
