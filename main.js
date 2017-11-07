var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/applications.html',
            controller: 'applicationsController'
        })
        .when('/work', {
            templateUrl: 'partials/applications.html',
            controller: 'applicationsController'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);

app.controller('applicationsController', ['$http', '$scope', '$window', function($http, $scope, $window){

    $http.get('applicationList.json')
        .then(function(success){
            console.log('$http.get is successful: ', success);
            $scope.applications = success.data.applications;

        }, function(error){
            console.log('Error: ', error);
        })

    $scope.detailsModal = function(){
        console.log('details clicked, open modal');
    };

    $scope.liveProject = function(app){
        console.log('link is : ', app.link);
            $window.open(app.link, '_blank');
    };


}]);

