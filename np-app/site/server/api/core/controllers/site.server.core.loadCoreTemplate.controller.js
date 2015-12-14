'use strict';

var api = require('../../../../../admin/server/api'),
    async = require('async');

module.exports = function (req, res) {
    async.parallel([
        getCoreSettings,
        getPrimaryMenuSettings,
        getSecondaryMenuSettings,
        getMenuSettings,
        getPageSettings
    ], function (err, results) {
        if (err) return new Error(err);

        res.render(results[0][0].theme + '/server/views/theme.server.default.view.html', {
            coreSettingsSource: results[0],
            primaryMenuSource: results[1],
            secondaryMenuSource: results[2],
            menusSource: results[3],
            pagesSource: results[4]
        });
    });

    function getCoreSettings (callback) {
        api.coreAPI.models.Core.find(function (err, core) {
            if (err) callback(err);
            if (!core) callback(new Error('App settings not found'));

            callback(null, core);
        });
    }

    function getPrimaryMenuSettings (callback) {
        api.menusAPI.models.MenuLocations.find(function (err, menuLocations) {
            if (err) callback(err);
            if (!menuLocations) callback(
                new Error('Menu Locations not found')
            );

            return menuLocations;
        }).then(function (menuLocations) {
            api.menusAPI.models.Menu.findOne({ title: menuLocations[0].primary },
                function (err, menu) {
                    if (err) callback(err);
                    callback(null, menu);
                });
        });
    }

    function getSecondaryMenuSettings (callback) {
        api.menusAPI.models.MenuLocations.find(function (err, menuLocations) {
            if (err) callback(err);
            if (!menuLocations) callback(
                new Error('Menu Locations not found')
            );

            return menuLocations;
        }).then(function (menuLocations) {
            api.menusAPI.models.Menu.findOne({title: menuLocations[0].secondary},
                function (err, menu) {
                    if (err) callback(err);
                    callback(null, menu);
                });
        });
    }

    function getMenuSettings (callback) {
        api.menusAPI.models.Menu.find(function (err, menus) {
            if (err) callback(err);
            if (!menus) callback(new Error('Menus not found'));

            callback(null, menus);
        });
    }

    function getPageSettings (callback) {
        api.pagesAPI.models.Page.find(function (err, pages) {
            if (err) callback(err);
            if (!pages) callback(new Error('Pages not found'));

            callback(null, pages);
        });
    }
};
