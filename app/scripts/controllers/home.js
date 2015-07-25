'use strict';

/**
 * @ngdoc function
 * @name tecnolandApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tecnolandApp
 */
angular.module('tecnolandApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
