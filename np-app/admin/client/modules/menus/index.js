'use strict';

var Modules = require('../admin.client.register.module');

// angular menus module and module accessories
Modules.registerModule('menus');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'menus';
