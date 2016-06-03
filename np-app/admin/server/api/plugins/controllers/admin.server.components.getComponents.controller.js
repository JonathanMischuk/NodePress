
// GET request: retrieve all components
module.exports = function (req, res) {
    'use strict';

    var componentsRaw = require('../../../../../../components/components'),
        components;

    // 1. sort component objects in array by 'order'
    //    property number value
    // 2. filter component objects from returned
    //    array by 'role' property value matching
    components = componentsRaw.sort(function (a, b) {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;

        return 0;
    }).filter(function (component) {
        if (req.user) return component.roles.indexOf(req.user.role) !== -1;

        return [];
    });

    res.json(components);
};

