'use strict';
(function() {
    var app = angular.module('meApp');
    app.config(function($stateProvider, $urlRouterProvider) {
        var aboutState = {
            name: 'about',
            url: '/',
            templateUrl: 'templates/about.html'
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
        $stateProvider.state(aboutState);
        $stateProvider.state(blogState);
        $stateProvider.state(introToJsState);
        $urlRouterProvider.otherwise('/');
    });
})();
