'use strict';

var models = require('../models');

// DELETE request: remove menu locations documents
module.exports = function (req, res, next) {
    models.MenuLocations.findByIdAndRemove(req.params.menuLocationsId,
        function (err) {
            if (err) return next(err);
            res.sendStatus(200);
        });
};
