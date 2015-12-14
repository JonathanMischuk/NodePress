'use strict';

var Core = require('../../core/models').Core;

// PUT request: update core settings
module.exports = function (req, res, next) {
    Core.findOneAndUpdate({ title: 'NodePress' }, req.body,
        function (err, core) {
            if (err) return next(err);
            res.json(core);
        });
};
