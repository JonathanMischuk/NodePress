var angular = require('angular');

module.exports = angular.module('app')
    .factory('AdminComponentsService', AdminComponentsService);

function AdminComponentsService ($http, $rootScope) {
    'use strict';

    var adminComponentsService = {};

    function getComponents () {
        return $http.get('/api/components').then(function (response) {
            return response.data;
        });
    }

    adminComponentsService.getComponentsByStateAndSection = function (data) {
        return getComponents().then(function (response) {
            return response.filter(function (component) {
                if (
                    component.states &&
                    !component.states.length
                ) {
                    return component;
                }

                if (
                    component.states &&
                    component.states.length &&
                    component.states.indexOf(data.state) !== -1
                ) {
                    return component;
                }
            }).filter(function (component) {
                if (
                    component.sections.length &&
                    component.sections.indexOf(data.section) !== -1
                ) {
                    return component;
                }
            }).map(function (component) {
                return component.attributes;
            });
        });
    };

    return adminComponentsService;
}
