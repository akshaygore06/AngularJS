// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController',function ($scope, $window, $log) {
    $log.log('sadfasdfsadf');
    $log.warn('This is a warning!!');
//    $window.alert('First alert');   
});



