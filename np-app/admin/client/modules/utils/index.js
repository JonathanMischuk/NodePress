'use strict';

var Modules = require('../admin.client.register.module');

// angular utilities module and module accessories
Modules.registerModule('utils');
require('./services');
require('./directives');

// exports module name as string for admin module dependency injection
module.exports = 'utils';
