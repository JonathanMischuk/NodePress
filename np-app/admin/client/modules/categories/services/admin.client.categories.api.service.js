'use strict';

var angular = require('angular');

module.exports = angular.module('categories')
    .factory('AdminCategoriesAPIService', AdminCategoriesAPIService);

function AdminCategoriesAPIService($resource) {
    return $resource('/api/categories/:categoryId', {
        categoryId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}
