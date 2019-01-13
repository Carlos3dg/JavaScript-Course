//Callbacks and AJAX
//Here we have a simple app where we can get the wheter according to the results gotten by the AJAX request

//Initial function request
function getUser(id, onSuccess, onFailure) {
    $.getJSON({
        url: `https: //api.github.com/users/${id}`,
        success: onSuccess, //this is a function
        error: onFailure
    });
}

//Function executed after get the data from the request of the initial function
function getWeather(user, onSuccess, onFailure) {
    $.getJSON({
        url: getLocationURL(user.location.spli(',')),
        success: onSuccess, //This is a function
        error: onFailure
    });
}

$('#btn').on('click', function() {
    /*1*/getUser('tylermcginnis', /*1.1*/function(user) {
    /*2*/getWeather(user, function(weather) {
        /*3*/updateUI({
                user,
                weather: weather.query.results
            });
        }, showError);
    }, showError);
});

/*Here we have an event where there's some callback functions. The first callback is the getUser function where we make the first request to our JSON, as a matter of fact this callback function has three parameters where the second one is other function, this function is executed if the request is succeed and this particular function execute inside the getWeather function, in this case this is our second callback and has other three parameters where the second one again is other function whose execute the updateUI function inside it, being this one our third callback executed inside a function. */

/*----- PROMISES ------*/
/* Promises are used when we get external information from an API or something similar, these are an optional way to make asyncronous procces and */
/* Promises have three states when the request is executed:
1. Pending. Meaning that the request process is ongoing.
2. Resolve. When the request process is completed successfully.
3. Reject. When the process is not completed because of a wrong link or something similar.
*/
// To create a promise we create an new instance of promise with a function as an argument
const promise = new Promise(function(resolve, reject){
    //This function has two arguments that works like functions
    //These functions allow the promise to change his status
    setTimeout(function(){
        resolve()//After two second the promise will change from pending to resolve
    }, 2000);
});

//However, we need to listen when the promise is resolved or rejected, to do that we use two methods that are executed like follow:
promise.then(console.log('success')); //If the status change to fulfill.
promise.catch(console.log('error')); //If the status change to reject.

// Promise and AJAX
//The same web app that we have at the top of thi program

//Initial function request
function getUser(id) {
    return new Promise(function(resolve, reject) {
        $.getJSON({
            url: `https: //api.github.com/users/${id}`,
            success: resolve,
            error: reject
        });
    })
}

//Function executed after get the data from the request of the initial function
function getWeather(user) {
    return new Promise(function(resolve, reject) {
        $.getJSON({
            url: getLocationURL(user.location.spli(',')),
            success: resolve,
            error: reject
        });
    });
}

$('#btn').on('click', function() {
    //Here we create our instance promise that it is being returned in the getUser function
    const userPromise = getUser('tylermcginnis');
    //If the promise in the function change to fulfilled we executed the function iside then:
    userPromise.then(function(user) {
        //This function create an instance from the promise iside the getWeather function
        const weatherPromie = getWeather(user);
        //If this promise is succeed we execute the next function:
        weatherPromie.then(function (weather) {
            //Inside this function we call to the updateUI function
            updateUI({user, weather: weather.query.results});
        });

        //If the promise is rejected:
        weatherPromie.catch(showError);
    })
    //If the promise change to rejected:
    userPromise.catch(showError);
});