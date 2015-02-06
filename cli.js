#!/usr/bin/env node
'use strict';
var meow = require('meow');
var randomQoutesGenerator = require('./');

var cli = meow({
  help: [
    'Usage',
    '  random-qoutes-generator <input>',
    '',
    'Example',
    '  random-qoutes-generator Unicorn'
  ].join('\n')
});

randomQoutesGenerator(cli.input[0]);
