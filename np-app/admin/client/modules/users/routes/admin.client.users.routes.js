var angular = require('angular');

module.exports = angular.module('users')
    .config(adminUserRoutes);

function adminUserRoutes (
    $stateProvider, 
    $urlRouterProvider
) {
    'use strict';

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'content': {
                    templateUrl: 'admin.client.usersLogin.view.html'
                }
            }
        })
        .state('np.users', {
            url: 'users/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.users.view.html',
                    controller: 'AdminGetUsersController as users'
                }
            },
            resolve: {
                users: function (AdminUsersAPIService) {
                    return AdminUsersAPIService.query();
                }
            }
        })
        .state('np.newUser', {
            url: 'new-user/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.usersNew.view.html'
                }
            }
        })
        .state('np.user', {
            url: 'users/:user',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.usersEdit.view.html',
                    controller: 'AdminUpdateUserController as user'
                }
            },
            resolve: {
                user: function ($stateParams, AdminUsersAPIService) {
                    return AdminUsersAPIService.get({
                        user: $stateParams.user
                    });
                }
            }
        });
}
