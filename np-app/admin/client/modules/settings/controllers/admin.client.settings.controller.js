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
                state: 'settings.general'
            },
            {
                title: 'Themes',
                slug: 'themes',
                state: 'settings.themes'
            },
            {
                title: 'Plugins',
                slug: 'plugins',
                state: 'settings.plugins'
            },
            {
                title: 'Skins',
                slug: 'skins',
                state: 'settings.skins'
            }
        ];

    vm.pages = pages;
    vm.settings = settings.data[0];
    vm.tabs = tabs;
    vm.currentTab = getCurrentTab();
    
    function getCurrentTab () {
        return $state.current.name.substring(9);
    }
}