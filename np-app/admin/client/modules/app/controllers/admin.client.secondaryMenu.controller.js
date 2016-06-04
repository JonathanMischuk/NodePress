var angular = require('angular');

module.exports = angular.module('app')
    .controller('AdminSecondaryMenuController', AdminSecondaryMenuController);

function AdminSecondaryMenuController (activeComponents) {
    'use strict';
    
    var vm = this;

    vm.activeComponents = activeComponents.components.map(function (component) {
        return component.children[activeComponents.param];
    });
}
