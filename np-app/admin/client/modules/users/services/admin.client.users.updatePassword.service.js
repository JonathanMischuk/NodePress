'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .service('AdminUserUpdatePasswordService', AdminUserUpdatePasswordService);

function AdminUserUpdatePasswordService($http) {
    var self = this;

    self.updateUserPassword = updateUserPassword;

    function updateUserPassword(user) {
        return $http.put('/api/users/' + user.username + '/password', user);
    }
}
