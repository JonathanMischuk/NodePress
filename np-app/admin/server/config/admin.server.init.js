'use strict';

var async = require('async'),
    api = require('../api');

module.exports = function () {
    async.waterfall([
        initCoreSettings,
        initMenu,
        initMenuLocationsSettings,
        initHomePage
    ], function (err) {
        if (err) return new Error(err);
    });
};

// setup initial app settings
function initCoreSettings (callback) {
    api.coreAPI.models.Core.find(function (err, core) {
        if (err) callback(err);
        if (!core.length) {
            core = new api.coreAPI.models.Core();

            core.save(function (err) {
                if (err) callback(err);
                callback(null);
            });
        }

        callback(null);
    });
}

// setup initial menu with home page
function initMenu (callback) {
    api.menusAPI.models.Menu.find(function (err, menu) {
        if (err) callback(err);
        if (!menu.length) {
            menu = new api.menusAPI.models.Menu({
                createdBy: 'NodePress',
                title: 'Primary Menu',
                items: [{
                    title: 'Home',
                    slug: '',
                    menuItemId: '0'
                }]
            });

            menu.save(function (err) {
                if (err) callback(err);
                callback(null);
            });
        }

        callback(null);
    });
}

// setup initial menu location settings
function initMenuLocationsSettings (callback) {
    api.menusAPI.models.MenuLocations.find(function (err, menuLocations) {
        if (err) callback(err);
        if (!menuLocations.length) {
            menuLocations = new api.menusAPI.models.MenuLocations();

            menuLocations.save(function (err) {
                if (err) callback(err);
                callback(null);
            });
        }

        callback(null);
    });
}

// configure initial Home page
function initHomePage (callback) {
    api.pagesAPI.models.Page.find(function (err, page) {
        if (err) callback(err);
        if (!page.length) {
            page = new api.pagesAPI.models.Page({
                createdBy: 'NodePress',
                title: 'Home',
                slug: 'home',
                category: 'Uncategorized',
                body: '<h3>This is your first NodePress page!</h3>'
            });

            page.save(function (err) {
                if (err) callback(err);
                callback(null);
            });
        }

        callback(null);
    });
}
