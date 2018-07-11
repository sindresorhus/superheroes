#!/usr/bin/env node
'use strict';
const meow = require('meow');
const superheroes = require('.');

const cli = meow(`
	Examples
	  $ superheroes
	  Spider-Ham

	  $ superheroes --all
	  3-D Man
	  A-Bomb
	  ...

	Options
	  --all  Get all names instead of a random name
`);

console.log(cli.flags.all ? superheroes.all.join('\n') : superheroes.random());
