//RETURN VALUES
    function getGreeting() {
        console.log('Hello world!');
        console.log('Hola mundo!');
    };
    getGreeting(); //This return the two valuesm declared in the body function: Hello world and hola mundo

    function greeting() {
        return console.log('Hello world');
    }
    greeting(); //This function just can return Hello world. The return word ends the function and just return the specified value.

//CALLING VERSUS REFERENCING
//In javaScript any value or statement follow by a parentheses represents a function and works to call the function
    greeting(); //return Hello world, here we are calling the function
    
    console.log(greeting); //return f greeting(){ return console.log('Hello world'); } this is better know like referencing

    //Referencing a function is well used to assign it to a variable, array, object or any other value:
    const f = greeting; //Now 'f' is equal to the function greeting

    f(); //Hello world
    greeting(); // Hello world

    //Assin the function to an object property
    const o = {
        hello: greeting
    }

    o.hello(); // Hello world

    //Add a function to an array
    const arr = [1, 2, 3];
    arr[1] = greeting; //Now our array is [1, 'Hello world', 3];
    arr[1](); //Hello world
    //Now our element with index 1 in our array is a function a to call it we need to write the parentheses.

//FUNCTION ARGUMENTS OR PARAMETERS
    function avg(a, b){
        return (a + b)/2;
    }

    console.log(avg(2, 2)); //R= 2; Here we assign direct value to the arguments.

    //Variables declared with the same name of arguments:
    const a = 3, b = 6;
    console.log(avg(a, b)); //R= 4.5; Here the function receive the argument values that variables a and b have(3 and 6), but if you assigned direct values to the arguments, variables a and b are ignored even do they are named similar:
        console.log(avg(5, 8)); //R=6.5;
    
    //Even if we modify arguments values inside a function, these ones don't affect variable values that are named equal:
    function f1(x) {
        console.log(`inside f1: x=${x}`);
        x = 5;
        console.log(`inside f1: x=${x}(after assigment)`);
    }

    let x = 3;
    console.log(`before calling f1: x=${x}`); //x = 3
    f1(x); //two consoles: 
                //x = 3
                //x = 5
    console.log(`after calling f: x=${x}`); //x = 3
    /*This example demostrates that assign a value inside a function to an argument that is called the same as a variable doesn't affect the variable value. Firts we declare a variable, after that we call the function with the argument value of the variable, then inside the function we modify the value and after the calling that we have just made the variable value keeps equal to its declared value, in this case 3. */

    //However Objects have a different behavior when they are called like an argument function:
    function fO (obj) {
        obj.message = `set in f (previous value: '${obj.message}')`;
    }

    let obj = {
        message: 'initial value'
    }

    console.log(obj.message); //'initial value'
    fO(obj); //We call the function and inside it modify the object property value
    console.log(obj.message); //'set in f (previous value: 'initial value') '
    /*Fist of all, the obj argument is different to the obj variable, the problem is that when we call the function the argument receive the value of the object, so now the obj argument also can refers to the obj object, so if we modify one of its properties inside the function these modifications are available outside the function and affect to the object, because both (the argument and the variable) are linked to the same object*/

    //Although we have modified the property value of the object in the previous example, assignments doesn't work in the same way:
    function fobj (ob){
        ob.message = 'set in f';
        //Assignment
        ob = {
            message: 'new object!',
        };
        console.log(ob.message);
    }

    let ob = {
        message: 'initial value'
    }
    console.log(ob.message); //initial value
    fobj(ob);//new object!
    console.log(ob.message)//set in f

    //Here the first console print the value declared in the variable, but when the function is called we passed the variable value as an argument, so when we first modify the message property in the function, at that moment the ob argument is refered to the same object that the ob variable is refered, but when we assign a value, like if we were creating a new object, this argument now is refering to a different object (object only available inside the function), so this modification do not affect the ob variable outside. In shortand words, properties from an object can be modify iside a function but new assigments are not affected by objects outside.

//DESTRUCTURING ARGUMENTS
    //like property objects
    function getSentence({subject, verb, object}) {
        return console.log(`${subject} ${verb} ${object}`);
    }

    const sentence = {
        subject: 'I',
        verb: 'love',
        object: 'JavaScript'
    };

    getSentence(sentence); //I love JavaScript
    //The only thing to get these done is that the property names and the argument names need to match, that means, they need to be named in the same way.

    //Like array elements
    function getSentence2([subject, verb, object]) {
        return console.log(`${subject} ${verb} ${object}`);
    }

    const array1 = ['I', 'love', 'JavaScript'];

    getSentence2(array1); //I love JavaScript

    //Like spread operator(...):
    function addPrefix(prefix, ...words) {
        const prefixWords = [];

        for(let i = 0; i<words.length; i++) {
            prefixWords[i] = prefix + words[i];
        }

        return console.log(prefixWords);
    }

    addPrefix('con', 'verse', 'vex'); //['converse', 'convex']
    /*Note that if you use the spread operator in a function declaration, it must be the last
    argument. If you put arguments after it, JavaScript wouldn’t have a reasonable way to
    distinguish between what should go in the spread argument and what should go in
    the remaining arguments.*/
