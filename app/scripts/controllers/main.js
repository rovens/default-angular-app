'use strict';

/**
 * @ngdoc function
 * @name defaultAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the defaultAngularAppApp
 */
angular.module('defaultAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
