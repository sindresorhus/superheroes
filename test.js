'use strict';
var test = require('ava');
var superheroes = require('./');

test(function (t) {
	t.assert(superheroes.all.length > 0);
	t.assert(superheroes.all.indexOf('Superman') !== -1);
	t.assert(superheroes.random());
	t.end();
});
