var angular = require('angular');

module.exports = angular.module('app')
    .factory('AdminComponentsService', AdminComponentsService);

function AdminComponentsService ($http) {
    'use strict';

    var adminComponentsService = {};

    function getComponents () {
        return $http.get('/api/components').then(function (response) {
            console.log(response.data);
            return response.data;
        });
    }

    adminComponentsService.getComponentsByStateAndSection = function (data) {
        return getComponents().then(function (response) {
            return response.filter(function (component) {
                if (component.states && !component.states.length) return component;
                if (
                    component.states &&
                    component.states.length &&
                    component.states.indexOf(data.state)
                ) {
                    return component;
                }
            }).filter(function (component) {
                if (!component.sections.length) return component;

                return component.sections.indexOf(data.section) !== -1;
            }).map(function (component) {
                return component.attributes;
            });
        });
    };

    return adminComponentsService;
}
