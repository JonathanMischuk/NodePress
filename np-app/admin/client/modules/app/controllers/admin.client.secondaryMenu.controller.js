var angular = require('angular');

module.exports = angular.module('app')
    .controller('AdminSecondaryMenuController', AdminSecondaryMenuController);

function AdminSecondaryMenuController (AdminComponentsService, components) {
    'use strict';
    
    var vm = this,
        data = {
            components: components,
            section: 'components-menu'
        };

    vm.activeComponents = AdminComponentsService.getComponentsAttributes(
        AdminComponentsService.getComponentsBySection(data)
    );
}
