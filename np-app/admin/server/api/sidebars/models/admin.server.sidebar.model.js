'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
    SidebarItem = require('./admin.server.sidebarItem.model'),
    Sidebar = db.Schema({
        createdBy: {
            type: String
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        items: [SidebarItem],
        publishDate: {
            type: Date,
            default: Date.now
        },
        modifiedBy: {
            type: String
        },
        modifiedDate: {
            type: String
        }
    });

//Sidebar.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('Sidebar', Sidebar);
