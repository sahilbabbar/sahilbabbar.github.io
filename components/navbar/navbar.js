(function () {
    'use strict';
    var app = angular.module('edApp');
    app.controller('navigationCtrl', function ($scope, $mdSidenav) {
        $scope.toggleRight = buildToggler('right');
        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
        $scope.openUserMenu = function($mdMenu, ev) {
            var originatorEv;
            originatorEv = ev;
            $mdMenu.open(ev);
        };
    });
})();