(function() {
    'use strict';
    var app = angular.module('edApp');
    app.config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'templates/home/home.html'
        };
        var userState = {
            name: 'user',
            url: '/user',
            templateUrl: 'components/user/user.html'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(userState);
        $urlRouterProvider.otherwise('/home');
    });
})();