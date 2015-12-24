'use strict';

var Modules = require('../admin.client.register.module');

// angular categories module and module accessories
Modules.registerModule('categories');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'categories';
