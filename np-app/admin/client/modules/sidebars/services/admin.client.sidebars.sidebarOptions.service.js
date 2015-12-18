'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .factory('AdminSidebarOptionsService', AdminSidebarOptionsService);

function AdminSidebarOptionsService () {
    return [
        {
            title: 'HTML Content',
            type: 'HTML',
            attr: 'sidebar-html-content',
            checked: false
        }
    ];
}
