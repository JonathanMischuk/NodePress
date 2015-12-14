'use strict';

// angular pages module and module accessories
require('./admin.client.pages.module');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'pages';
