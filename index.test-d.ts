import {expectType} from 'tsd';
import superheroes = require('.');

expectType<readonly string[]>(superheroes.all);
expectType<string>(superheroes.random());
