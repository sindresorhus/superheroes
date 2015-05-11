'use strict';
var uniqueRandomArray = require('unique-random-array');
var superheroes = require('./superheroes.json');

exports.all = superheroes;
exports.random = uniqueRandomArray(superheroes);
