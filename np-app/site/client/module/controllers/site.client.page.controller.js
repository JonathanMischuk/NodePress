'use strict';

var angular = require('angular'),
    _ = require('lodash');

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

    console.log('slug:', slug);

    vm.page = {};
    vm.siteHomePage = $rootScope.coreSettings[0].siteHomePage;

    SitePageServices.getPage(slug, vm.siteHomePage)
        .then(function (response) {
            if (response.data === null) $location.path("/error");

            console.log(response.data);
            
            vm.page = response.data[0];
            
            $scope.$emit('pageData', response.data);
        });
}
