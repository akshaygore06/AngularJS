var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = "Akshay";
    
}]);


myApp.controller('secondController', ['$scope', function($scope) {
    

    $scope.name = "Karkar";
    
}]);
