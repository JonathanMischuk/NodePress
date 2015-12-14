'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .service('AdminUsersLoginService', AdminUsersLoginService);

function AdminUsersLoginService($http) {
    var self = this;

    self.login = login;

    function login(user) {
        return $http.post('/auth/login', user);
    }
}
