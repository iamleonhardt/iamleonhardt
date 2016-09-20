var app = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'main.html'
        })
        .when('/applications', {
            templateUrl : 'applications.html'
        })
        .when('/about', {
            templateUrl : 'about.html'
        })
        .when('/contact', {
            templateUrl : 'contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});