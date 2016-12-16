'use strict';
(function() {
    var app = angular.module('shlApp');
    app.directive('header', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/header.html'
        }
    });
    app.directive('footer', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/footer.html'
        }
    });
})();
