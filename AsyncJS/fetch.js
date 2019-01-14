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

/* When we use the fetch function, it is neccesary to provide at least one argument whose value is going to be the direct location of our file request, when the request will be processed the function is going to return a promise object with a Response (Response object) obviously this return is an HTTP response and not our  json or any file we are looking for, to get this we need to use the json method(in this case)  and this is going to return a second promise where we can get now our desirable file, so thats the reason why we have a second then. */