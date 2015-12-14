'use strict';

module.exports = function (err, req, res, next) {
    if (err) return next(err);

    var themes = [];

    fs.readdirSync(__dirname + '/../../../../../../np-site/themes/')
        .forEach(function (dir) {
            themes.push(dir);
        });

    return res.send(themes);
};
