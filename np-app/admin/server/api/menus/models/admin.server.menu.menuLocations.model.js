'use strict';

var db = require('../../../config/admin.server.db'),
    MenuLocations = db.Schema({
        title: {
            type: String,
            default: 'Menu Locations'
        },
        primary: {
            type: String,
            default: 'Primary Menu'
        },
        secondary: {
            type: String,
            default: 'No Menu'
        },
        publishDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        modifiedBy: {
            type: String
        },
        modifiedDate: {
            type: String
        }
    });

module.exports = db.model('MenuLocations', MenuLocations);
