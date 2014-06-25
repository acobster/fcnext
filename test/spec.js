'use strict';

describe("NextCtrl:", function() {
  var $rootScope, nextCtrl, scope;

  // Mock our application module
  beforeEach( module('NextApp') );
  beforeEach( inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    nextCtrl = $controller('NextCtrl', {
      $scope: scope
    });
  }) );

  it('should initialize scope with proper values', function() {
    expect( scope.time ).toBe(0);
    expect( scope.chords.length ).toBe(1);
    expect( scope.chords[0].notation ).toBeDefined();
  });

  describe('next():', function() {

    it('should advance the timer', function() {
      for( var i=0; i<100; i++ ) {
        expect(scope.time).toBe(i);
        scope.next();
      }
    });

  });
})