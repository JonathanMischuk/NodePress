'use strict';

var angular = require('angular');

module.exports = angular.module('settings')
    .factory('AdminAppSettingsPropertiesService', AdminAppSettingsPropertiesService);

function AdminAppSettingsPropertiesService($http) {

    var self = this;

    return {
        self: self
    }
}
