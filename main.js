var app = angular.module('portfolioApp', ['ngAnimate', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            views: {
                'body' : {
                    templateUrl : 'partials/main.html',
                    controller : 'applicationsController'

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
                    templateUrl : 'partials/applications.html',
                    controller : 'applicationsController'
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
            }
        });
}]);

app.controller('applicationsController', ['$http', '$scope', '$window', function($http, $scope, $window){

    $scope.detailsModal = function(){
        console.log('details clicked, open modal');
    };

    $scope.liveProject = function(app){
        console.log('link is : ', app.link);
            $window.open(app.link, '_blank');
    }

    $http.get('applicationList.json')
        .success(function(data){
        $scope.applications = data.applications;
        console.log(data);
    })
}]);

