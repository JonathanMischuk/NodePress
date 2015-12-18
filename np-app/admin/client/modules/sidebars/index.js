'use strict';

// angular sidebars module and module accessories
require('./admin.client.sidebars.module');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'sidebars';
