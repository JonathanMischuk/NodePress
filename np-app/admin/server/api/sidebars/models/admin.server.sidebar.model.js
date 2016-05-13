'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
    NpDatesTool = require('../../../../../../np-tools/human.readable.date'),
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
            type: String,
            default: NpDatesTool.createHumanReadableDate
        },
        modifiedBy: {
            type: String
        },
        modifiedDate: {
            type: String,
            default: NpDatesTool.createHumanReadableDate
        }
    });

//Sidebar.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('Sidebar', Sidebar);
