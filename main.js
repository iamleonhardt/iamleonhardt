var app = angular.module("portfolioApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("#about", {
            templateUrl : "about.html"
        })
        .when("#applications", {
            templateUrl : "applications.html"
        })
        .when("#contact", {
            templateUrl : "contact.html"
        });
});