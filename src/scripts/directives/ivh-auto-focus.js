
angular.module('ivh.autoFocus')
  .directive('ivhAutoFocus', ['$timeout', function($timeout) {
      'use strict';
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          $timeout(function() {
            element[0].focus();
          });
        }
      };
  }]);
