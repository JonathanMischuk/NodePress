'use strict';

var Modules = require('../admin.client.register.module');

// angular sidebars module and module accessories
Modules.registerModule('sidebars');
require('./routes');
require('./services');
require('./controllers');
require('./directives');

// exports module name as string for admin module dependency injection
module.exports = 'sidebars';
