//CALLBACKS
//It is a function running inside other fuunction
// 1. One example is the forEach function:
const ciudades = ['Londres', 'New York', 'Madrid', 'Viena', 'Paris'];

//Callback, well known as inline callback due to has an unnamed function
ciudades.forEach(function(ciudad) {
    console.log(ciudad)
})

//To define the name function we can do our forEach like follow:
function callback(ciudad) {
    console.log(ciudad);
}
ciudades.forEach(callback);

// 2. Other example is the setTimeout function.
/* In this example we're going to simulate a request from an API or a database server and that petition is going to be printed in the window, but while the patition is processed at the same time an administrator is add a new register in the database */
const paises = ['Mexico', 'Canada', 'Inglaterra', 'Holanda', 'Alemania'];

// Ad a new register in our database
function nuevoPais(pais, mostrarPaises){
    //Here we use a setTimeout function so simulate that someone add a new register in the request process or after it.
    setTimeout(function() {
        paises.push(pais);
        mostrarPaises() //Callback
    }, 2000);
}
//Make request to the database
function mostrarPaises(){
    //Here we use a setTimeout function to simulate the time process that this require
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000)
}

nuevoPais('Australia', mostrarPaises); //When we call this function the new data is added after two seconds, so, although this function is called to run first its execution time takes more time so the code continuos its path and run the other lines after this call while the lines in this function are runned in two seconds. On the other hand the second parameter has a function value, function that shows the data in the window, so we call this function inside the process where the data is being added to run it again but now with the new data already storage.

mostrarPaises(); //When we call this function the countries are shown after a second.



