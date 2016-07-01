var glob = require('glob');

module.exports = (function () {
    "use strict";

    var components = [],
        componentPaths;

    componentPaths = glob.sync(__dirname + '/**/component.*.js');

    componentPaths.forEach(function (componentPath) {
        components.push(require(componentPath));
    });

    return components;
})();
