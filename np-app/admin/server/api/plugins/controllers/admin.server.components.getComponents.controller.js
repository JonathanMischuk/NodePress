'use strict';

var fs = require('fs');

// GET request: retrieve all components
module.exports = function (req, res, next) {
    var componentsRaw = [],
        componentsSorted,
        components;
    
    fs.readdirSync(__dirname + '/../../../../../../components')
        .forEach(function (component) {
            componentsRaw.push(
                require('../../../../../../components/' + component)
            );
        });

    componentsSorted = componentsRaw.sort(
        function (a, b) {
            if (a.order > b.order) return 1;
            if (a.order < b.order) return -1;

            return 0;
        });

    components = componentsSorted.filter(function (component) {
        if (req.user) {
            return component.roles.indexOf(req.user.role) !== -1;
        } else {
            return [];
        }
    });

    res.json(components);
};

