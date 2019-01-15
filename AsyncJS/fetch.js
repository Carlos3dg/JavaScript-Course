// FETCH API
/*Fetch api is a service similiar to the typical service known as XMLHtttpRequest. One advantage of it is that this request in not gonna be rejected if there's not a found request (error 404) or an error 500,instead this function just going to return a OK property with a false value, the request only will be rejected when it has found a error in the red or a invalid permision by the site where our request is in */

/*Example*/
fetch('https://jsonplaceholder.typicode.com/users') //This is the fetch function, at least needs one argument, whose will define the direct location of our file request
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });

/* When we use the fetch function, it is neccesary to provide at least one argument whose value is going to be the direct location of our file request, when the request will be processed the function is going to return a promise object with a Response (Response object) obviously this return is an HTTP response and not our  json or any file we are looking for, to get this we need to use the json method(in this case)  and this is going to return a second promise where we can get now our desirable file, so thats the reason why we have a second then(). */

// We can pass a second parameter to our fetch method like follow:

const misCabeceras = new Headers();

var miInit = {
    method: 'GET',
    headers: misCabeceras,
    mode: 'cors',
    cache: 'default'
};

fetch('https://jsonplaceholder.typicode.com/users', miInit)
    .then(function(response) {
       return response.json()
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log('A permission error ocurred:' + error);
    }); //This catch goes linked with the first then()
//Here we pass a second argument with the object format, this is the correct way to pass it.

//Proving if the request is satisfactory
/* In fetch a petition is rejected just when there's a problem in the red what most of the times means a permission problem, an 404 error or a 500 error not represent a type error in fetch, the difference is that the response object keeps being the result with the only difference that the ok property is with a false value */
//One way to prove if the fetch request is a red error or a 404 error or similiar is like this:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(myJson) {
                console.log(myJson); 
            })
        } else {
            console.log('OK status:' + response.ok);
        }
    }).catch(function(error) {
        console.log('A red problem ocurred in the process:' + error);
    });
/*In the previous example the request return the file json if the request doesn't have a red problem and the response.ok is true, if the file we are looking for is not found like if we had written a direction like this at the end: .com/userses the response pass its value to false and the printed result is 'OK status: false'. On the other hand if the error is in the red like put a wrong direction in the domain name the printed result would be 'A red problem ocurred in the process: typeError'.*/

//The Request() constructor:
/* The request constructor is an object that acepts the same parameters that the fetch method and it is used to clone a request or to storage all the parameters in a variable and just pass the variable to the fetch method like follow: */
const url = 'https://jsonplaceholder.typicode.com/users';

const myInit = {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
};

const myRequest = new Request(url, myInit);

fetch(myRequest)
    .then(response => {
        return response.json();
    }).then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
