var angular = require('angular');

module.exports = angular.module('menus')
    .service('AdminManageMenuLocationsService', AdminManageMenuLocationsService);

function AdminManageMenuLocationsService($http) {
    'use strict';

    var self = this;

    self.getMenuLocations = getMenuLocations;
    self.updateMenuLocations = updateMenuLocations;

    function getMenuLocations() {
        return $http.get('/api/menuLocations');
    }

    function updateMenuLocations(menuLocations) {
        return $http.put('/api/menuLocations', menuLocations);
    }
}
