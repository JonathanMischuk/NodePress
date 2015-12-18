'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .controller('SiteController', SiteController);

function SiteController ($scope, $rootScope) {
    var vm = this;

    vm.coreSettings = $rootScope.coreSettings;
    vm.primaryMenu = $rootScope.primaryMenu;
    vm.secondaryMenu = $rootScope.secondaryMenu;
    vm.menus = $rootScope.menus;
    vm.pages = $rootScope.pages;

    vm.sidebars = {
        left: true,
        right: true
    };

    $scope.$on('pageData', function (_, page) {
        vm.page = page;
    });
}
