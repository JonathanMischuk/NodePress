'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
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

Menu.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('Menu', Menu);
