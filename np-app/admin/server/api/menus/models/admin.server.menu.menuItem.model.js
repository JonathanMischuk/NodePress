'use strict';

var db = require('../../../config/admin.server.db'),
    MenuItem = db.Schema({
        title: {
            type: String
        },
        slug: {
            type: String
        },
        order: {
            type: Number
        },
        menuItemId: {
            type: Number
        }
    });

module.exports = MenuItem;
