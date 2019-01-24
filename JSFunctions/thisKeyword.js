//THIS
/*Normall the this keyword is used in functions inside objects and this keyword is referred to the value where the function el being called. In other cases when the this keyword is outside of a function the value is bound to window object (the general object)
Example: */
console.log(this === window)// true

a = 37;

console.log(window.a); //37
console.log(this.a); //37

/*Inside functions*/
function f1() {
    return this;
}

console.log(f1()); //Window {...} (The window object)
//Since the previous code is not strict mode, and because the value of this is not set by the call, this will default to the global object, which is window.

//However in stric mode, the value of this remains at whatever it was set to when entering the execution context:
function f2() {
    'use strict';
    return this;
}

console.log(f2()); //undefined
//In this example, since this is not defined in the execution context its value remains in undefined

/* Inside functions that are methods */
const o = {
    name: 'Wallance',
    speak() { return `My name is ${this.name}` },
}

console.log(o.speak()); //My name is Wallance
//When we call o.speak(), the this keyword is bound to o.
//However it is important to know that this keyword value relies on how the function where is in it's called, and not where the function is declared.

//Consider the next example:
const speak = o.speak;
console.log(speak); // speak() { return `My name is ${this.name}` }

console.log(speak === o.speak) //true, both are the same function

console.log(speak())//My name is ''
//Although both are the same function the final value inside the template literal has no value in this case, because of this  is not being bound to anything, if we see one example earlier the this keyword is bound to o just because the function is being called from there, but in this case the function is being called since the global object, where the name property has no value.

//Now if we use the this keyword iside a function that is inside a method, the value of this variable can't be bound to the object where the method is in, due to the nested function is being called withouth any reference value:
const ob = {
    name: 'Julie',
    greetBackwards: function() {
        function getReverseName() {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
            
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(ob.greetBackwards()); // Return '' si eman ym ,olleH
//The value of this keyword is the window object, where the name property doesn't exist at all. This occurs just because the getReverseName is being called iside the method without any references value.
//One way to resolve this is like follow:
const obj = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(obj.greetBackwards()); // eiluJ si eman ym ,olleH
//This is a commmon technique, and you will see this get assigned to self or that, if you observe we use the this keyword before to get inside the getReverseName, so here the reference value is still available.
//Another way to do this is using Arrow functions:

/* Arrow Functions */
//Arrow functions let us to reduce the typing code in a function, they reduce syntax in three ways:
/*
    1. You can omit the word function.
    2. If the function takes a single argument, you can omit the parentheses.
    3. If the body function is a single expression, you can omit the curly braces and the return statement.
*/

//Arrow functions let us to retain the enclosing this value in the lexical context's this, This means that functions inside a method that are declared as arrow functions can have the this value available from the method that is enclosing them. Taking the greetBackwards() function seen earlier we can use the this keyword inside the getReverseName() function
const obj2 = {
    name: 'Julie',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
console.log(obj2.greetBackwards()); // eiluJ si eman ym ,olleH

/* Call, apply and bind */
//Call and apply are methods available to every function and work as a called the function declaring the this value of that function. 

//Call:
const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };

//Here this function is not associated with any object and it is using this though:
function greet(){
    return `Hello, I'm ${this.name}!`;
}

console.log(greet()); // Hello, I'm ! //Here the this keyword has the window object value so the name property doesn't exist here.
console.log(greet.call(bruce)); // Hello, I'm Bruce! //Here the this keyword took the bruce value to acces to the name property of that object.
console.log(greet.call(madeline)); // Hello, I'm Madeline! //In the same way like the earlier printed the this keyword took the madeline value to acces to the name property.

//Call with arguments:
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer'); //Here the first value is the value that we want this to bound to and the other values are the values that we want our function takes in its parameters.
console.log(bruce); // {name: 'Bruce', birthYear: 1949, occupation: 'singer'}

//Apply:
//Apply is identical to call except the way it handles function arguments. call takes arguments directly, just like a normal function. apply takes its arguments as an array.
update.apply(madeline, [1918, 'writer']); //to pass arguments values we pass them in one array, the value of this is the only one passing directly.
console.log(madeline); //{name: 'Madeline', birthYear: 1918, occupation: 'writer'}

//Bind:
//Bind is a method that allow us to bound the this keyword of a function to a permantly value. When we use this method we create a new function with the same body but with the this value bound to the first argument of bind, one time we use this method this new function created can't be modify its this keyword.
//We match the updateBruce variable to the update function but with the this keyword equal to bruce object
const updateBruce = update.bind(bruce);
//Then we call the function providing the two arguments that has its body
updateBruce(1964, 'actor');

console.log(bruce); //Now the bruce object is {name: 'bruce', birthYear: 1964, occupation: 'actor'}

//If we want to call updateBruce function with the call method:
updateBruce.call(madeline, 1274, 'king');
console.log(bruce); // {name: 'bruce', birthYear: 1274, occupation: 'king'}
//In this case the first argument try to provid the this value but this is rejected due to we already provided a value in the first bind method, the other two values are the arguments that has the body function and this are successfully changed in the object as we can observe.

//It is possible to provide permanent arguments with the bind function, we just create our new function a in the bind method defined the this value follow by the argument value(s):
const updateBruce1949 = update.bind(bruce, 1949);
//We have assigned a permantly value to the birthYear property but we can still change the values of the occupation property:
updateBruce1949('singer, songwriter');
console.log(bruce); //{name: "Bruce", birthYear: 1949, occupation: "singer, songwriter"}


