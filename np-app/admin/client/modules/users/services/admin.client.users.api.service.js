'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .factory('AdminUsersAPIService', AdminUsersAPIService);

function AdminUsersAPIService($resource) {
    return $resource('/api/users/:user', {
        user: '@username'
    }, {
        update: {
            method: 'PUT'
        }
    });
}
