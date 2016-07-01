'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .factory('SiteSidebarItemsService', SiteSidebarItemsService);

function SiteSidebarItemsService ($http, $rootScope) {
    var self = {};
    
    self.getSidebarLeft = function (params) {
        var siteHomePage = $rootScope.coreSettings[0].siteHomePage;

        console.log('SiteSidebarItemsService in fuck mode:', params);

        if (params) {
            return $http.get('/sidebars/' + params);
        } else if (siteHomePage) {
            return $http.get('/sidebars/' + siteHomePage);
        } else {
            return $http.get('/sidebars/home');
        }
    };

    self.getSidebarRight = function () {

    };

    return self;
}
