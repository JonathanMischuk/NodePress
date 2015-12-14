'use strict';

var angular = require('angular');

module.exports = angular.module('pages')
    .factory('AdminPagesAPIService', AdminPagesAPIService);

function AdminPagesAPIService($resource) {
    return $resource('/api/pages/:pageId', {
        pageId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}
