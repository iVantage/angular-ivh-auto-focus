
/**
 * Main module declaration for ivh.autoFocus
 *
 * @package ivh.autoFocus
 * @copyright 2015 iVantage Health Analytics, Inc.
 */

angular.module('ivh.autoFocus', []);


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
