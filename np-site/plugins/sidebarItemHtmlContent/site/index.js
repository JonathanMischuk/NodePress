// (function () {
//     'use strict';
//
//     angular.module('site')
//         .directive('sidebarItemHtmlContent', sidebarItemHtmlContent);
//
//     function sidebarItemHtmlContent () {
//         return {
//             replace: true,
//             restrict: 'C',
//             template: '<div><h5>{{ sidebar.sidebar.model.title }}</h5><div ng-bind-html="sidebar.sidebar.model.body"></div></div>',
//             controller: function ($scope) {
//                 var vm = this;
//                 vm.sidebar = $scope.sidebarItem;
//             },
//             controllerAs: 'sidebar'
//         };
//     }
// })();
