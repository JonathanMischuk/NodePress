'use strict';

var angular = require('angular');

module.exports = angular.module('footer')
    .config(adminFooterRoutes);

function adminFooterRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('np.footers', {
            url: 'footers/',
            views: {
                'innerContent': {
                    templateUrl: 'admin.client.footers.view.html',
                    controller: 'AdminNewFooterController as FooterCtrl'
                }
            }
        });
}
