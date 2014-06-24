angular
  .module( 'NextApp', [] )
    .controller( 'NextCtrl', ['$scope', function( $scope ) {

      $scope.time = 0;
      $scope.chords = [];

      $scope.next = function() {
        $scope.time++;
        $scope.$apply();
      };

      $scope.start = function() {
        $scope.timer = setInterval( function() {
          $scope.next();
        }, 1000);
      };

      /**
       * RUN THE THING
       */
      angular.element(document).ready( function() {
        $scope.start();
      });

    }]);