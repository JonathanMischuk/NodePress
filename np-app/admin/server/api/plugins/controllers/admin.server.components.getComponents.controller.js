var componentMethods = require('../../../../../../np-tools/components');

// GET request: retrieve all components
module.exports = function (req, res) {
    'use strict';

    res.json(componentMethods.componentsFilteredByRole(req.user));
};

