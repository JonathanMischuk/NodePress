'use strict';

var fs = require('fs');

// GET request: retrieve single page to edit
module.exports = function (req, res, next) {
    var pluginsNames = [],
        plugins = [];
    
    fs.readdirSync(__dirname + '/../../../../../../np-site/plugins').forEach(function (dir) {
        pluginsNames.push(dir);
    });

    pluginsNames.forEach(function (plugin, i) {
        plugins[i] = require('../../../../../../np-site/plugins/' + plugin + '/plugin.config');
    });
    
    res.json(plugins);
};

