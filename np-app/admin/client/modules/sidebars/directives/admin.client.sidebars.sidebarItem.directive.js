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
        controller: function (AdminMenusAPIService) {
            var vm = this;
            vm.menus = AdminMenusAPIService.query();

            /*vm.menus = AdminMenusAPIService.query(function (menus) {
                angular.forEach($scope.sidebar.sidebar, function (sidebarItem, i) {
                    if (sidebarItem.type === 'menu') {
                        //sidebarItem.model.body = vm.menus[i].items
                        if (sidebarItem.model.body === '') sidebarItem.model.body = vm.menus[0].title;
                        console.log(sidebarItem.model.body);
                    }
                });
            });*/
        },
        controllerAs: 'menus',
        link: link
    };

    function link (scope, elem, attrs) {
    }
}


