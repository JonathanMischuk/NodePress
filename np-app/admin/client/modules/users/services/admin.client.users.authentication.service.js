'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .factory('AdminUserAuthenticationService', AdminUserAuthenticationService);

function AdminUserAuthenticationService($http, $location, $rootScope) {
    return function () {
        return $http.get('/auth').then(function (response) {
            $rootScope.np.auth.user = response.data.user;
            $rootScope.np.auth.exists = response.data.exists;

            if (!$rootScope.np.auth.exists) {
                $location.path('/new-user/');
            } else if ($rootScope.np.auth.exists && !$rootScope.np.auth.user) {
                $location.path('/login');
            }
        });
    };
}
