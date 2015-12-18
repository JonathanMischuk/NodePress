'use strict';

var db = require('../../../config/admin.server.db'),
    SidebarItem = db.Schema({
        title: {
            type: String
        },
        body: {
            type: String
        },
        order: {
            type: Number
        },
        menuItemId: {
            type: Number
        }
    });

module.exports = SidebarItem;
