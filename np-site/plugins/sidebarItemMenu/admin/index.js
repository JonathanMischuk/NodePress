(function () {
    'use strict';

    angular.module('sidebars')
        .directive('sidebarItemMenu', sidebarItemMenu);

    function sidebarItemMenu () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: '/sidebarItemMenu/admin/plugin.template.html'
        };
    }
})();