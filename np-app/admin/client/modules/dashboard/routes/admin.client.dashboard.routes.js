'use strict';

var angular = require('angular');

module.exports = angular.module('dashboard')
    .config(adminDashboardRoutes);

function adminDashboardRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'admin.client.dashboard.view.html'
        });
}
