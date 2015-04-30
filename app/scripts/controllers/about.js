'use strict';

/**
 * @ngdoc function
 * @name defaultAngularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the defaultAngularAppApp
 */
angular.module('defaultAngularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
