'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
    Category = db.Schema({
        createdBy: {
            type: String
        },
        title: {
            type: String,
            required: true,
            unique: true
        },
        slug: {
            type: String
        },
        description: {
            type: String
        },
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

Category.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('Category', Category);
