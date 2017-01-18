var componentMethods = require('../../../../../../np-tools/components');

// GET request: retrieve all components
module.exports = function (req, res) {
    'use strict';

    var data = {};

    data.param = req.params.section;
    data.components = componentMethods.componentsFilteredByRole()
        .filter(function (component) {
            console.log(component);
            return component.sections.indexOf(req.params.section) !== -1;
        });

    res.json(data);
};

