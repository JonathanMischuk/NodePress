'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .factory('AdminUserAuthenticationService', AdminUserAuthenticationService);

function AdminUserAuthenticationService($http, $rootScope, $state) {
    return function () {
        return $http.get('/auth').then(function (response) {
            $rootScope.np.auth.user = response.data.user;
            $rootScope.np.auth.exists = response.data.exists;

            if (!$rootScope.np.auth.exists) {
                $state.go('np.newUser');
            } else if ($rootScope.np.auth.exists && !$rootScope.np.auth.user) {
                $state.go('login');
            }
        });
    };
}
