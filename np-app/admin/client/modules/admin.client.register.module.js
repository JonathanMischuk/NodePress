'use strict';

var angular = require('angular');

var Modules = function () {
    var self = this;

    self.arr = [];

    self.registerModule = function (moduleName, dependencies) {
        self.arr.push(moduleName);

        angular.module(moduleName, dependencies || []);
    };

    self.pushModules = function (moduleName) {
        self.arr.forEach(function (module) {
            angular.module(moduleName).requires.push(module);
        });
    };

    self.requireModules = function (modules, callback) {
        modules.forEach(function (mod) {
            callback('./' + mod);
        });
    };

    self.getModules = function () {
        return self.arr;
    };

    return self;
};

module.exports = new Modules();
