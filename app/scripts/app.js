'use strict';

/**
 * @ngdoc overview
 * @name tecnolandApp
 * @description
 * # tecnolandApp
 *
 * Main module of the application.
 */
angular
  .module('tecnolandApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/LoL',{
        templateUrl:'views/LoL.html',
        controller: 'LoLCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });