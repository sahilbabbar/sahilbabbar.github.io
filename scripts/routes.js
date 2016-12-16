'use strict';
(function() {
    angular.module('shlApp').config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html'
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .when('/reach', {
                templateUrl: 'templates/reach.html'
            })
            .when('/blog', {
                templateUrl: 'templates/blog.html'
            })
            .when('/blog/1', {
                templateUrl: 'templates/articles/philoOne.html'
            })
            .when('/blog/2', {
                templateUrl: 'templates/articles/lifeOne.html'
            })
            .when('/projects', {
                templateUrl: 'templates/projects.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();
