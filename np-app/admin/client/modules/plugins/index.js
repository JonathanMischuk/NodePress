'use strict';

var Modules = require('../admin.client.register.module');

// angular sidebars module and module accessories
Modules.registerModule('plugins');
require('./services');

// exports module name as string for admin module dependency injection
module.exports = 'plugins';
