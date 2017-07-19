'use strict';
(function() {
    var app = angular.module('meApp');
    app.directive('header', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/header.html'
        }
    });
})();
