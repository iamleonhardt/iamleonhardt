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
                    template: '<h4>Applications</h4>'
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
                    template: '<h4>About</h4>'
                },
                'body' : {
                    templateUrl : 'partials/about.html'
                }
            }        })
        .state('contact', {
            url: '/',
            views: {
                'pageName': {
                    template: '<h4>Contact</h4>'
                },
                'body' : {
                    templateUrl : 'partials/contact.html'
                }
            }
        })
    ;
}]);


