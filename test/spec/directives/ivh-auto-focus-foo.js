
describe('Directive: ivhAutoFocus', function() {
  'use strict';

  beforeEach(module('ivh.autoFocus'));

  it('should give an input element the focus', inject(function($compile, $timeout) {
    var $el = $compile('<input type="text" ivh-auto-focus />')({});
    document.body.appendChild($el[0]);
    $timeout.flush();
    expect(document.activeElement).toBe($el[0]);
  }));
});
