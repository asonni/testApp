(function(){
  "use strict";
  var app = angular.module('auth', ['ui.router']);
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'pages/register',
    }).state('twitter', {
      url: '/twitter',
      templateUrl: 'pages/twitter-login',
    }).state('facebook', {
      url: '/facebook',
      templateUrl: 'pages/facebook-login',
    }).state('google', {
      url: '/google',
      templateUrl: 'pages/google-plus-login',
    });
    $urlRouterProvider.otherwise("/register");
  }]);
})();