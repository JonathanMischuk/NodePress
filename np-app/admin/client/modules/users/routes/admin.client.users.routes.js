'use strict';

var angular = require('angular');

module.exports = angular.module('users')
    .config(adminUserRoutes);

function adminUserRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'admin.client.usersLogin.view.html'
        })
        .state('users', {
            url: '/users/',
            templateUrl: 'admin.client.users.view.html'
        })
        .state('newUser', {
            url: '/new-user/',
            templateUrl: 'admin.client.usersNew.view.html'
        })
        .state('user', {
            url: '/users/:user',
            templateUrl: 'admin.client.usersEdit.view.html'
        });
}
