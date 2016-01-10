'use strict';

var fs = require('fs'),
    async = require('async'),
    Core = require('../../core/models').Core,
    User = require('../../users/models').User,
    Menu = require('../../menus/models').Menu;

/**
 *
 * 1. Check if any themes are located in theme directory for users to
 *    authenticate then load
 * 2. Check if users exist in database
 * 3. Check if user is authenticated
 *
 */
module.exports = function (req, res, next) {
    /*var themes = [],
        skins = [],
        pluginsConfig = [],*/
    var plugins = fs.readdirSync(__dirname + '/../../../../../../np-site/plugins');

    async.series([
        getThemes,
        getSkins,
        getPluginsConfig,
        getUser,
        getSkin
    ], function (err, results) {
        res.render('admin.server.default.view.html', {
            user: req.user || null,
            exists: results[3],
            themes: results[0] || [],
            skins: results[1] || [],
            skin: results[4],
            plugins: plugins,
            pluginsConfig: results[2]
        });
    });

    function getThemes (callback) {
        var themes = [];

        fs.readdirSync(__dirname + '/../../../../../../np-site/themes/')
            .forEach(function (dir) {
                if (!dir) return new Error("No directories found.");
                themes.push(dir);
            });

        callback(null, themes);
    }

    function getSkins (callback) {
        var skins = [];

        fs.readdirSync(__dirname + '/../../../../client/skins')
            .forEach(function (dir) {
                if (!dir) return new Error("No directories found.");
                skins.push(dir);
            });

        callback(null, skins);
    }

    function getPluginsConfig (callback) {
        var pluginsConfig = [];

        plugins.forEach(function (plugin) {
            pluginsConfig.push(require('../../../../../../np-site/plugins/' + plugin + '/plugin.config'));
        });

        callback(null, pluginsConfig);
    }

    function getUser (callback) {
        User.find(function (err, user) {
            if (err) return next(err);

            callback(null, user.length);
        });
    }

    function getSkin (callback) {
        Core.find(function (err, core) {
            if (err) return next(err);
            callback(null, core[0].skin);
        });
    }

    /*fs.readdirSync(__dirname + '/../../../../../../np-site/themes/')
        .forEach(function (dir) {
            if (!dir) return new Error("No directories found.");
            themes.push(dir);
        });

    fs.readdirSync(__dirname + '/../../../../client/skins')
        .forEach(function (dir) {
            if (!dir) return new Error("No directories found.");
            skins.push(dir);
        });

    plugins.forEach(function (plugin) {
        pluginsConfig.push(require('../../../../../../np-site/plugins/' + plugin + '/plugin.config'));
    });

    User.find(function (err, user) {
        if (err) return next(err);

        var exists = user.length;

        res.render('admin.server.default.view.html', {
            user: req.user || null,
            exists: exists,
            themes: themes || [],
            skins: skins || [],
            plugins: plugins,
            pluginsConfig: pluginsConfig
        });
    });*/
};
