'use strict';

window.$ = window.jQuery = require('jquery');

var angular = require('angular');

require('bootstrap');
require('jquery-ui');

require('angular-ui-bootstrap');

// main angular admin module
require('./admin.client.module');
require('./admin.client.module.config');
