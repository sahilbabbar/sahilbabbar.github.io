'use strict';
(function() {
    var app = angular.module('meApp');
    app.config(function($stateProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html'
        };
        var blogState = {
            name: 'blog',
            url: '/blog',
            templateUrl: 'templates/blog.html'
        };
        var introToJsState = {
            name: 'introToJs',
            url: '/introToJs',
            templateUrl: 'blog/introToJs.html'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(blogState);
        $stateProvider.state(introToJsState);
    });
})();
