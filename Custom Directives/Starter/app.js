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
    
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.directive('customDirective', function(){
   return {
       restrict: 'AECM',
       template : '<a href="#" class="list-group-item">Akshay Gore<p>420 Nord Avenue, Chico 95926</p></a>',
       replace: true
   } ;
});

myApp.controller('mainController', ['$scope','$log', function($scope,$log ) {
    
    
    
}]);


myApp.controller('secondController', ['$scope','$log','$routeParams', function($scope,$log,$routeParams) {
    

    
    
}]);
