'use strict';

var angular = require('angular'),
    NpDatesTool = require('../../../../../../np-tools/human.readable.date');

module.exports = angular.module('utils')
    .service('AdminUtilitiesServices', AdminUtilitiesServices);

function AdminUtilitiesServices ($window) {
    var self = this;

    self.createHostURL = createHostURL;
    self.createHumanReadableDate = NpDatesTool.createHumanReadableDate;

    function createHostURL (slug) {
        return $window.location.protocol + '//' + $window.location.host + (slug || '');
    }
}
