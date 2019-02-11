//How to enumarate object's properties
//for... in
//Like we have seen previously the for.. in enumarate the properties of an object.
//Consider the next object with some strings and one symbol as properties 
const SYM = Symbol();
console.log(SYM);
const o = { a: 1, b: 2, c: 3, [SYM]: 4};
//Here  the prop variable enumarate only the string properties of the o object 
for(let prop in o) {
    //Here the condition fails. It's says if the properties of hte o object are differents from the properties that the prop variable is enumarating, but due to this declaration fails the word continue is executed and follows with the code below the if statement 
    if(!o.hasOwnProperty(prop)) continue
    console.log(`${prop} : ${o[prop]}`);
} //a: 1 b: 2 c: 3
//Notice that for...in only enumarates the string properties and omit the symbol property.

//Object.keys
//Object.keys is a method to gets all the string properties of an object as an array 
console.log(Object.keys(o)); // ['a', 'b', 'c']

//We can get the same result shown by the for.. in loop with the object.keys method as follow:
Object.keys(o).forEach(prop => console.log(`${prop} : ${o[prop]}`)); //a: 1 b: 2 c: 3
//This kind of method is usefull when we need the key properties as an array, and in that way get access to all array methods
//example:
const ob = { apple: 1, xochilt: 2, ballon: 3, guitar: 4, xylophone: 5};
Object.keys(ob)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${ob[prop]}`)); // xochilt: 2, xylophone: 5
//Here we get the key properties as an array and then we get all elements that start with 'x' using the filter method to finally print every element in our array with the forEach method

//Object-Oriented Programming
//Class and Instance Creation
//In the follow example we will make a class named Car and this one will have four properties two of them has default values, userGears as array and userGear as the first element of the userGears array, however this property can be modify in the shift method with the condition to be provided with an acceptable value (one equal to the userGears elements)
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    shift(gear) {
        if(this.userGears.indexOf(gear) < 0)
            console.log(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}

const car1 = new Car('Tesla', 'Model S');
car1.shift('D'); //We can change the userGear value to 'D' due to this value is part of the userGears elements
console.log(car1.userGear); // 'D'; 
car1.shift('O'); // Invalid gear: O //On the other hand we can not change the userGear value to 'O' due to this one doesn't exist in the userGears elements
//However we can change the value of this property directly event if this one is not in userGears elements
car1.userGear = 'O';
console.log(car1.userGear);  // O

//Dynamic properties
//this can help mitigate this weakness. They have the semantics of a property with the functionality of a method.
class Carro {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    get userGear() {
        return this._userGear;
    }

    set userGear(value) {
        if(this._userGears.indexOf(value) < 0)
            console.log(`Invalid gear: ${value}`);
        this._userGear = value;
    }

    shift(gear) {
        this.userGear = gear;
    }
}
//However this doesn't solve the problem
const carro1 = new Carro('Tesla', 'Model S');
carro1.shift('D');
console.log(carro1._userGear); // D
carro1._userGear = 'O'
console.log(carro1._userGear); // O
//One way to resolve this is using an instance of WeakMap, to see more about this topic go to page 152 on Learning javascript book

