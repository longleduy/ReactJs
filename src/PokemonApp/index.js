import ReactDOM from 'react-dom';
import React from 'react';
import {PokemonApp} from './PokemonApp';
// import {Parent} from './test';
var listpoke=[
    'arcanine',
    'marowak',
    'pikachu',
    'raichu',
    'blastoise',
    'gengar',
    'gyarados',
    'eevee',
    'dragonite',
    'mewtwo',
    'scizor',
    'tyranitar']
ReactDOM.render(<PokemonApp pokedex={listpoke} />,document.querySelector('#home'));
// ReactDOM.render(<Parent  />,document.querySelector('#home'));
var obj = {
    name:"Longkhanh",
    age:18
}
var obj2 = {...obj};
obj.age=30;
console.log(obj2);