'use strict';

module.exports = {
    authorization: require('./admin.server.users.authorization.controller'),
    getUser: require('./admin.server.users.getUser.controller'),
    getUsers: require('./admin.server.users.getUsers.controller'),
    login: require('./admin.server.users.login.controller'),
    logout: require('./admin.server.users.logout.controller'),
    newUser: require('./admin.server.users.newUser.controller'),
    removeUser: require('./admin.server.users.removeUser.controller'),
    updatePassword: require('./admin.server.users.updatePassword.controller'),
    updateUser: require('./admin.server.users.updateUser.controller')
};
