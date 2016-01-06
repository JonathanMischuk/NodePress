'use strict';

var fs = require('fs'),
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
    var themes = [],
        pluginsConfig = [],
        plugins = fs.readdirSync(__dirname + '/../../../../../../np-site/plugins');

    fs.readdirSync(__dirname + '/../../../../../../np-site/themes/')
        .forEach(function (dir) {
            if (!dir) return new Error("No directories found.");
            themes.push(dir);
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
            plugins: plugins,
            pluginsConfig: pluginsConfig
        });
    });
};
