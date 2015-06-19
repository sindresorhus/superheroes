#!/usr/bin/env node
'use strict';
var meow = require('meow');
var superheroes = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ superheroes',
		'  Spider-Ham',
		'',
		'  $ superheroes --all',
		'  3-D Man',
		'  A-Bomb',
		'  ...',
		'',
		'Options',
		'  --all   Get all names instead of a random name'
	]
});

console.log(cli.flags.all ? superheroes.all.join('\n') : superheroes.random());
