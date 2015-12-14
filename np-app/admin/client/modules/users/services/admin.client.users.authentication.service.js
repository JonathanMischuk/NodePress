'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .factory('AdminUserAuthenticationService', AdminUserAuthenticationService);

function AdminUserAuthenticationService($http, $location, $rootScope) {
    return function () {
        return $http.get('/auth').then(function (response) {
            $rootScope.auth = response.data.user;
            $rootScope.exists = response.data.exists;

            if (!$rootScope.exists) {
                $location.path('/new-user/');
            } else if ($rootScope.exists && !$rootScope.auth) {
                $location.path('/login');
            }
        });
    };
}
