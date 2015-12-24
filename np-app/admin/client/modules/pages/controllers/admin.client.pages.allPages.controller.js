'use strict';

var angular = require('angular');

module.exports = angular.module('pages')
    .controller('AdminGetPagesController', AdminGetPagesController);

function AdminGetPagesController (
    AdminPagesAPIService,
    AdminUtilitiesServices) {

    var vm = this;

    vm.pages = AdminPagesAPIService.query();
    vm.frontEndURL = AdminUtilitiesServices.createHostURL();
    vm.removePage = removePage;

    // TODO: find it's own home
    function removePage (page) {
        var index = vm.pages.indexOf(page);
        page.$remove();

        vm.pages.splice(index, 1);
    }
}
