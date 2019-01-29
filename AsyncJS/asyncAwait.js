//ASYNC/AWAIT
//Async
/* The first step to work with async/await functions is to write the word async before the function where is going to be some asyncronous functions or promises, when we add the async word to a function, this return a promise, even if the function is literally empty  */
async function f() {
    return 1;
}
//Here we use the .then() method to get the promise value, in case of somethign wrong we could use catch method
f().then(function(response) {
    console.log(response);
});
/* What an async function try to means is 'Inside this function is going to be some asyncronous function invocations'. However the JavaScript engine needs to know where these asycronous functions are, for this we use the await word */

//Await
//The await keyword is set before a variable equal to a promise and its work is to wait until that promise is resolved to in that way return the correspondent value. It is necessary emphasize that await keyword can be use just inside an async function.
//Example:
async function f1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 1000);
    });

    const result = await promise; //Here the function pauses till the promise resolves

    console.log(result);
}
f1();
//The preovious example shows how an async function with the await keyword works, as we know in most of the cases where we use promises we get external information that takes time to process it so when we make this kind of requests the code keeps its path around without waiting for the promise, but with await keyword we tell the function to wait for the promise till this one gets resolve , so here we make a promise that delay one second to get resolve and while this second is running any line of code after the await keyword can be executed, at the time when the second is finished this same keyword has the power to return the resolve value from the promise.

//Example using fetch api:
async function showUsers() {
    // Await for the promise object response
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Await for the promise that return the json file
    const usersJson = await response.json();
    //Lines of code executed after the two previous promises
    let html = '<ul>'
    usersJson.forEach((user, index) => {
        html += `<li>Name: ${user.name}, Id: ${user.id}</li>`;
    });
    html += '</ul>';

    document.body.innerHTML = html;
}
showUsers();
//As you can see await keyword is now used insted of then() method because this returns the resolve event value.

//Await accepts thenables objects
//Await allows to use thenable objects (those with a callable then method).
class Thenable {
    constructor (num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log(resolve); // Here nothing happens due to is not a call.
        setTimeout(() => {
            resolve(this.num * 2) // The resolve called is here
        }, 1000);
    }
};

async function f2() {
    let result = await new Thenable(1);

    console.log(result); //After one second returns 2
}
f2();
//Here we are using await in an object instance where there's a then method, so what await keyword makes is to see the instances like a promise, so one time await do this the keyword looks for the then method, which one is available in the instance, so the then method start executing and await looks for the resolve or reject arguments, the first that is called is the one that await takes to return it to the variable.

//Error handling
//When we use await keyword this one waits for the resolve called method, in case of the absence of this method and the presence of a reject method, await throws an error statement, to handle this kind of situations we use the try catch statements:
async function f3() {
    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
        console.log(err); //TypeError: failed to fetch
    }
}
f3();
//In case of an error, the control jumps to the catch block. We can also wrap multiple lines:
async function f4() {
    try {
        let response = await fetch('http://no-user-here');
        let userJson = await response.json();
    } catch(err) {
        console.log(err); //TypeError: failed to fetch
    }
}
f4();





