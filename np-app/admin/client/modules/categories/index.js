'use strict';

// angular categories module and module accessories
require('./admin.client.categories.module');
require('./routes');
require('./services');
require('./controllers');

// exports module name as string for admin module dependency injection
module.exports = 'categories';
