var angular = require('angular');

module.exports = angular.module('app')
    .controller('AdminSecondaryMenuController', AdminSecondaryMenuController);

function AdminSecondaryMenuController (componentsMenu) {
    'use strict';
    
    var vm = this;

    vm.activeComponents = componentsMenu;
}
