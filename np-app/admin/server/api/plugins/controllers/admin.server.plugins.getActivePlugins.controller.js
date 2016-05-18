'use strict';

var fs = require('fs'),
    async = require('async'),
    Core = require('../../core/models').Core;

// GET request: retrieve active plugin definitions
module.exports = function (req, res, next) {
    async.waterfall([
        getActivePlugins,
        getActivePluginDefinitions
    ], function (err, results) {
        res.json(results);
    });

    function getActivePlugins (callback) {
        Core.find(function (err, core) {
            if (err) return next(err);

            callback(null, core[0]);
        });
    }

    function getActivePluginDefinitions (core, callback) {
        var pluginDefinitions = [],
            pluginDirs = [],
            plugins;

        fs.readdirSync(__dirname + '/../../../../../../np-site/plugins').forEach(function (dir) {
            pluginDirs.push(dir);
        });

        pluginDirs.forEach(function (plugin, i) {
            pluginDefinitions[i] = require('../../../../../../np-site/plugins/' + plugin + '/plugin.config');
        });

        plugins = pluginDefinitions.filter(function (plugin) {
            if (core.plugins.indexOf(plugin.slug) !== -1) {
                return plugin;
            }
        });

        callback(null, plugins);
    }
};

