'use strict';

var angular = require('angular');

module.exports = angular.module('sidebars')
    .directive('sidebarItem', sidebarItem)
    .directive('sidebarItemHtmlContent', sidebarItemHtmlContent)
    .directive('sidebarItemMenu', sidebarItemMenu);

function sidebarItem ($compile) {
    return {
        link: link
    };

    function link (scope, elem, attrs) {
        var html = '<span ng-model="' + attrs.model + '" class="' + attrs.slug + '">';
        elem.append($compile(html)(scope));
    }
}

function sidebarItemHtmlContent () {
    return {
        replace: true,
        restrict: 'C',
        template: '<textarea class="materialize-textarea"></textarea>'
    };
}

function sidebarItemMenu () {
    return {
        replace: true,
        restrict: 'C',
        template: '<select ng-options="menu.title as menu.title for menu in menus.menus">' +
            '<option value="" disabled active>Select a Menu</option>' +
        '</select>',
        controller: AdminSidebarItemMenuDirectiveController,
        controllerAs: 'menus'
    };

    function AdminSidebarItemMenuDirectiveController ($scope, $timeout, AdminMenusAPIService) {
        var vm = this;

        // get list of published menus
        vm.menus = AdminMenusAPIService.query();

        // set Materialize select box default value
        angular.forEach($scope.sidebar.sidebar.items, function (sidebarItem) {
            if (sidebarItem.type === 'menu') {
                $timeout(function () {
                    angular.element('.sidebar-item-id-' + sidebarItem.id + ' .select-dropdown')
                        .val($scope.sidebar.sidebar.items[$scope.sidebar.sidebar.items.indexOf(sidebarItem)].model.body);
                }, 200);
            }
        });
    }
}


