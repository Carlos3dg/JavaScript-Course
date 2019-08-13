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


// Sets
/*This are similar to the array objects, they contain elements but with the exception that those elements can no be repeted inside the set, this can be seen like an array without repeated values*/

//Creation
const password = new Set();
console.log(password); // Set(0) {}

//To add values:
password.add('al074#');
password.add('al034#');
console.log(password); // Set(2) {'al074#', 'al034#'}

//To print them individually
//1. First we storage the values in a new varaible
const passwordValues = password.values() //This method returns a new object called setInterator

//2. Then we print the values with the calling of the next method and the value property:
console.log(passwordValues.next().value); // al074#
console.log(passwordValues.next().value); // al034#

//Other way to print them
//forEach
password.forEach((password, index, obj) => {
     return (                    //Example of the first running
          console.log(password), // al074#
          console.log(index), //    al074#
          console.log(obj) //       Set(2) {'al074#', 'al034#'}
     ) //Here the index value is the same to the password value, sets don't have index as arrays
});


//To initialize a set with values
const users = new Set(['pablo', 'juan', 'lizeth']);
console.log(users) //Set(3) {'pablo', 'juan', 'lizeth'}

//To delete a value from it
users.delete('pablo');
console.log(users);