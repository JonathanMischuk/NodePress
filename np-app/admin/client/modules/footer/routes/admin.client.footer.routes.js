'use strict';

var angular = require('angular');

module.exports = angular.module('footer')
    .config(adminFooterRoutes);

function adminFooterRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('footer', {
            url: '/footer/',
            templateUrl: 'admin.client.footer.view.html'
        });
}
