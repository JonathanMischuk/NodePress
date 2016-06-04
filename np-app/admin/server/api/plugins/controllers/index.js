'use strict';

module.exports = {
    getPlugins: require('./admin.server.plugins.getPlugins.controller'),
    getActivePlugins: require('./admin.server.plugins.getActivePlugins.controller'),
    getComponents: require('./admin.server.components.getComponents.controller'),
    getComponentsBySection: require('./admin.server.components.getComponentsBySection.controller')
};

