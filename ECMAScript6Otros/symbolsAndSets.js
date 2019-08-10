//SYMBOLS

//Creation
const simbolo = Symbol();
console.log(simbolo); // Symbol(), The value is Symbol()

//We can pass it a description inside the parethesis
const simbolo2 = Symbol('Great!');
console.log(simbolo2); //Symbol(Great!)

// One characteristic from the Symbols is that they are differen from each other, example:
console.log(Symbol() === Symbol()); //False

//We can add Symbols as property values in Objects as follow:
const person = {};
/*To add a normal property*/
person.name = 'Carlos';

/*To add Symbols*/
const lastName = Symbol(); /*1. We define the symbol*/
person[lastName] = 'Ortiz'; /*2. Then we put the symbol inside brakets and add it a value */

/*To print a symbol property*/
console.log(person[lastName]); // Ortiz

console.log(person) // { name: 'Carlos', Symbol(): 'Ortiz' }

/*Symbols inside objects are private so we can not iterate over them, example:*/
for (i in person) {
     console.log(`${i} : ${person[i]}`); /* name: Carlos */
} /* This just print the name property, but no the Symbol */
