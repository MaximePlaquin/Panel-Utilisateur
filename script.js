'use strict';
var app=angular.module('single-page-app',[
  'ngRoute'
]);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/login',{
                templateUrl: 'login.html'
          })
		      .when('/mdp',{
                templateUrl: 'mdp.html'
          })
		      .when('/mail',{
                templateUrl: 'mail.html'
          })
          .otherwise({
                redirectTo: '/'
          })
});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
