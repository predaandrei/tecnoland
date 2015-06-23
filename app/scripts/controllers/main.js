'use strict';

/**
 * @ngdoc function
 * @name tecnolandApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tecnolandApp
 */
angular.module('tecnolandApp')
  .controller('MainCtrl', function ($scope) {
    $scope.participantes = [
      {
      	nombre : 'Pepe',
      	foto : ''
      },{
      	nombre : 'Culo',
      	foto : ''
      },{
      	nombre : 'Gato',
      	foto : ''
      },{
      	nombre : 'Sandia',
      	foto : ''
      },{
      	nombre : 'Pepe2',
      	foto : ''
      },{
      	nombre : 'Pep3e',
      	foto : ''
      },{
      	nombre : 'Pepe4',
      	foto : ''
      },
    ];
  });
