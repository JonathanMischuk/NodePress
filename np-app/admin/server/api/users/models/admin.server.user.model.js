'use strict';

var db = require('../../../config/admin.server.db'),
    uniqueValidator = require('mongoose-unique-validator'),
    NpDatesTool = require('../../../../../../np-tools/human.readable.date'),
    User = db.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        signUpDate: {
            type: String,
            default: NpDatesTool.createHumanReadableDate,
            required: true
        },
        modifiedBy: {
            type: String
        },
        modifiedDate: {
            type: String
        },
        lastSession: {
            type: Date
        }
    });

User.plugin(uniqueValidator, { message: '{VALUE} already exists' });

module.exports = db.model('User', User);
