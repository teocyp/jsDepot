/*

//OLD WAY


var hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

var name     = hero.name;
var realName = hero.realName;

name;     // => 'Batman',
realName; // => 'Bruce Wayne'

//NEW WAY

const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

const { name, realName } = hero;

name;     // => 'Batman',
realName; // => 'Bruce Wayne'

const { name, realName } = hero is an object destructuring assignment. This statement defines the variables name and realName, then assigns to them the values of properties hero.name and hero.realName correspondigly.

Comparing the 2 approaches to access the object properties:

const name     = hero.name;
const realName = hero.realName;

// is equivalent to:

const { name, realName } = hero;



*/