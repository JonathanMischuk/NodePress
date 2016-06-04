var angular = require('angular');

module.exports = angular.module('app')
    .factory('AdminComponentsService', AdminComponentsService);

function AdminComponentsService ($http) {
    'use strict';

    var adminComponentsService = {};

    /**
     * scrape components directory and
     * retrieve all component.*.js files
     *
     * @returns {Promise}
     */
    adminComponentsService.getComponents = function () {
        return $http.get('/api/components').then(function (response) {
            return response.data;
        });
    };

    /**
     * retrieve all components that have empty
     * states array and all components of
     * specific state
     *
     * @param data
     * @returns {*}
     */
    adminComponentsService.getComponentsByState = function (data) {
        return adminComponentsService.getComponents().then(function (response) {
            return response.filter(function (component) {
                if (component.states && !component.states.length) {
                    return component;
                }

                if (
                    component.states &&
                    component.states.length &&
                    component.states.indexOf(data.state) !== -1
                ) {
                    return component;
                }
            });
        });
    };

    /**
     * retrieve all components of a specific
     * section
     *
     * @param data
     * @returns {Array}
     */
    adminComponentsService.getComponentsBySection = function (data) {
        return data.components.filter(function (component) {
            if (
                component.sections.length &&
                component.sections.indexOf(data.section) !== -1
            ) {
                return component;
            }
        });
    };

    /**
     * map components to their
     * attributes property
     *
     * @param components
     * @returns {*}
     */
    adminComponentsService.getComponentsAttributes = function (components) {
        return components.map(function (component) {
            return component.attributes;
        });
    };

    return adminComponentsService;
}
