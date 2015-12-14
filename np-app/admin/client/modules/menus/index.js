'use strict';

// angular menus module and module accessories
require('./admin.client.menus.module');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'menus';
