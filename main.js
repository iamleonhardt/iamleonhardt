var app = angular.module('portfolioApp', ['ngRoute', 'ngAnimate', 'ui.router', '$stateProvider']);

app.config(function($stateProvider) {
    $stateProvider
        .state('main', {
            views: {
                'pageName': {

                },
                'body' : {
                    templateUrl : 'main.html'
                }
            }
        })
        .state('/applications', {
            views: {
                'pageName': {

                },
                'body' : {
                    templateUrl : 'applications.html'
                }
            }
        })
        .state('/about', {
            views: {
                'pageName': {

                },
                'body' : {
                    templateUrl : 'about.html'
                }
            }        })
        .state('/contact', {
            views: {
                'pageName': {

                },
                'body' : {
                    templateUrl : 'contact.html'
                }
            }
        })
        // .otherwise({  //todo add otherwise to state
        //     redirectTo: '/'
        // })
    ;
});


