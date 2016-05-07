var angular = require('angular');

module.exports = angular.module('users')
    .config(adminUserRoutes);

function adminUserRoutes (
    $stateProvider, 
    $urlRouterProvider
) {
    'use strict';
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'admin.client.usersLogin.view.html'
        })
        .state('users', {
            url: '/users/',
            templateUrl: 'admin.client.users.view.html',
            controller: 'AdminGetUsersController as users',
            resolve: {
                users: function (AdminUsersAPIService) {
                    return AdminUsersAPIService.query();
                }
            }
        })
        .state('newUser', {
            url: '/new-user/',
            templateUrl: 'admin.client.usersNew.view.html'
        })
        .state('user', {
            url: '/users/:user',
            templateUrl: 'admin.client.usersEdit.view.html',
            controller: 'AdminUpdateUserController as user',
            resolve: {
                user: function ($stateParams, AdminUsersAPIService) {
                    return AdminUsersAPIService.get({
                        user: $stateParams.user
                    });
                }
            }
        });
}
