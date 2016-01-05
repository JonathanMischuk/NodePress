'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .config(siteRoutes);

function siteRoutes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/error');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    templateProvider: function ($rootScope, $templateRequest) {
                        return $templateRequest(
                            $rootScope.coreSettings[0].theme + '/client/views/theme.client.page.view.html'
                        );
                    }
                },
                'sidebarLeft': {
                    templateProvider: function ($rootScope, $templateRequest) {
                        return $templateRequest(
                            $rootScope.coreSettings[0].theme + '/client/views/theme.client.sidebarLeft.view.html'
                        );
                    }
                },
                'sidebarRight': {
                    templateProvider: function ($rootScope, $templateRequest) {
                        return $templateRequest(
                            $rootScope.coreSettings[0].theme + '/client/views/theme.client.sidebarRight.view.html'
                        );
                    }
                }
            }
        })
        .state('error', {
            url: '/error',
            templateProvider: function ($rootScope, $templateRequest) {
                return $templateRequest(
                    $rootScope.coreSettings[0].theme + '/client/views/theme.client.404.view.html'
                );
            }
        })
        .state('inside', {
            url: '/:page',
            views: {
                '': {
                    templateProvider: function ($rootScope, $templateRequest) {
                        return $templateRequest(
                            $rootScope.coreSettings[0].theme + '/client/views/theme.client.page.view.html'
                        );
                    }
                },
                'sidebarLeft': {
                    templateProvider: function ($rootScope, $templateRequest) {
                        return $templateRequest(
                            $rootScope.coreSettings[0].theme + '/client/views/theme.client.sidebarLeft.view.html'
                        );
                    }
                },
                'sidebarRight': {
                    templateProvider: function ($rootScope, $templateRequest) {
                        return $templateRequest(
                            $rootScope.coreSettings[0].theme + '/client/views/theme.client.sidebarRight.view.html'
                        );
                    }
                }
            }
        });

        /*.state('inside', {
            url: '/:page',
            templateProvider: function ($rootScope, $templateRequest) {
                return $templateRequest(
                    $rootScope.coreSettings[0].theme + '/client/views/theme.client.page.view.html'
                );
            }
        });*/
}
