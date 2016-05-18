'use strict';

var fs = require('fs');

// GET request: retrieve all pluginDefinitions
module.exports = function (req, res, next) {
    var pluginDefinitions = [],
        pluginDirs = [];

    fs.readdirSync(__dirname + '/../../../../../../np-site/plugins').forEach(function (dir) {
        pluginDirs.push(dir);
    });

    pluginDirs.forEach(function (plugin, i) {
        pluginDefinitions[i] = require('../../../../../../np-site/plugins/' + plugin + '/plugin.config');
    });

    res.json(pluginDefinitions);
};

