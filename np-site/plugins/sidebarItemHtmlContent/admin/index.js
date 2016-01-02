(function () {
    'use strict';

    angular.module('sidebars')
        .directive('sidebarItemHtmlContent', sidebarItemHtmlContent);

    function sidebarItemHtmlContent () {
        return {
            replace: true,
            restrict: 'C',
            template: '<textarea class="materialize-textarea"></textarea>'
        };
    }
})();
