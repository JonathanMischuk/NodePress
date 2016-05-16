(function () {
    'use strict';

    angular.module('sidebars')
        .directive('sidebarItemHtmlContent', sidebarItemHtmlContent);

    function sidebarItemHtmlContent () {
        return {
            replace: true,
            restrict: 'E',
            template: '<textarea class="materialize-textarea" ng-model="item.model.body"></textarea>'
        };
    }
})();
