var app = angular.module('portfolioApp', ['ngAnimate', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            views: {
                'body' : {
                    templateUrl : 'partials/main.html'
                }
            }
        })
        .state('applications', {
            url: '/',
            views: {
                'pageName': {

                },
                'body' : {
                    templateUrl : 'partials/applications.html'
                }
            }
        })
        .state('about', {
            url: '/',
            views: {
                'pageName': {
                    template: 'About'
                },
                'body' : {
                    templateUrl : 'partials/about.html'
                }
            }        })
        .state('contact', {
            url: '/',
            views: {
                'pageName': {

                },
                'body' : {
                    templateUrl : 'partials/contact.html'
                }
            }
        })
    ;
}]);


