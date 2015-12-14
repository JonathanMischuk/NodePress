'use strict';

var angular = require('angular');

module.exports = angular.module('site')
    .controller('SitePagesController', SitePagesController);

function SitePagesController (
    $scope,
    $rootScope,
    $stateParams,
    $location,
    SitePageServices) {

    var vm = this,
        slug = $stateParams.page;

    vm.page = {};
    vm.siteHomePage = $rootScope.coreSettings[0].siteHomePage;

    SitePageServices.getPage(slug, vm.siteHomePage)
        .then(function (response) {
            if (response.data === null) $location.path("/error");
            vm.page = response.data;
            $scope.$emit('pageData', response.data);
        });
}
