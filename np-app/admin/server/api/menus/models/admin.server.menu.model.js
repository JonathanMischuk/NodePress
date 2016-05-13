'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
    NpDatesTool = require('../../../../../../np-tools/human.readable.date'),
    MenuItem = require('./admin.server.menu.menuItem.model'),
    Menu = db.Schema({
        createdBy: {
            type: String
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        menuLocation: {
            type: String
        },
        items: [MenuItem],
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

Menu.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('Menu', Menu);
