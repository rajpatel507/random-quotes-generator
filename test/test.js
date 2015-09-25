/*global describe, it */
'use strict';
var assert = require('assert');
var randomQoutesGenerator = require('../');

describe('random-qoutes-generator node module', function () {
  it('must have at least one test', function () {
    randomQoutesGenerator();
    assert(true, 'I was too lazy to write any tests. Shame on me.');
  });
});
