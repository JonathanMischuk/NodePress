var angular = require('angular');

module.exports = angular.module('pages')
    .controller('AdminGetPagesController', AdminGetPagesController);

function AdminGetPagesController (
    AdminUtilitiesServices,
    pages
) {
    'use strict';
    
    var vm = this;

    vm.pages = pages;
    vm.frontEndURL = AdminUtilitiesServices.createHostURL();
    vm.removePage = removePage;
    vm.setSelectedPage = setSelectedPage;
    vm.selectedPage = null;

    // TODO: find it's own home
    function removePage () {
        var index = vm.pages.indexOf(vm.selectedPage);
        vm.selectedPage.$remove();

        vm.pages.splice(index, 1);
        vm.selectedPage = null;

        // display success dialog
        Materialize.toast('Page removed successfully', 4000, 'success');
    }

    function setSelectedPage (page) {
        vm.selectedPage = page;
    }
}
