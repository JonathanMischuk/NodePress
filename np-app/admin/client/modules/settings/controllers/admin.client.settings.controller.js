var angular = require('angular');

module.exports = angular.module('settings')
    .controller('AdminSettingsController', AdminSettingsController);

function AdminSettingsController (
    $state,
    pages,
    settings
) {
    'use strict';

    var vm = this,
        tabs = [
            {
                title: 'General',
                slug: 'general',
                state: 'np.settings.general'
            },
            {
                title: 'Skins',
                slug: 'skins',
                state: 'np.settings.skins'
            },
            {
                title: 'Themes',
                slug: 'themes',
                state: 'np.settings.themes'
            },
            {
                title: 'Plugins',
                slug: 'plugins',
                state: 'np.settings.plugins'
            }
        ];

    vm.pages = pages;
    vm.settings = settings.data[0];
    vm.tabs = tabs;
    vm.currentTab = getCurrentTab();
    
    function getCurrentTab () {
        return $state.current.name.substring(12);
    }
}