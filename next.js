'use strict';

// Declare module
var nextApp = angular.module( 'NextApp', [] );


// Controller
nextApp.controller( 'NextCtrl', ['$scope', function( $scope ) {

  var init_chord = "tabstave notation=true tablature=false\n"
    + "notes (C/4.E/4.G/4.A/4.D/5) $.medium.C6 add9$";

  $scope.time = 0;
  $scope.chords = [{ notation: init_chord }];

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


// VexTab directive
nextApp.directive( 'vextab', function() {

  return {
    // note, this won't work with the player
    restrict: 'EC',
    replace: true,
    template: "<div class='vex-tabdiv' editor='true'>{{chord.notation}}</div>",
    scope: { chord: '=' }
  };

});