var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter', function($scope,$filter) {
    
//    console.log($("#handle").val());
    $scope.handle = '';
    
    $scope.lowecasehandle = function(){
        return $filter('lowercase')($scope.handle);    
    };
    
    
    $scope.count = 1;
    
}]);
