'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .service('SitePageServices', SitePageServices);

function SitePageServices ($http) {
    var self = this;

    self.getPages = function () {
        return $http.get('/pages');
    };

    self.getPage = function (slug, siteHomePage) {
        if (slug) {
            return $http.get('/pages/' + slug);
        } else if (siteHomePage) {
            return $http.get('/pages/' + siteHomePage);
        } else {
            return $http.get('/pages/home');
        }
    };

    self.getMenus = function () {
        return $http.get('/api/menus');
    };
}
