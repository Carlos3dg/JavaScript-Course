const cliente = {
     nombre: 'Alejandra',
     tipo: 'Premium'
}

var nombre = 'Pablo';
var tipo = 'Gold';

({nombre, tipo} = cliente);

console.log(nombre);
console.log(tipo);

//DESTRCUTURING IN ARRAYS AND OBJECTS
/*Arrays*/
const cities = ['New York', 'London', 'Paris', 'Sokovia'];
//To declare variables according with the elements of an array we declare them inside [] and the order that we write them inside the brackets is the order that we want the variables to be equal in the array elements
let [firstCity] = cities;
console.log(firstCity); //New York

let [newYork, london] = cities;
console.log(newYork, london) //New York, London

//If we wanted to have just the third value or another value different from the first one we put comas in those places that are before our looking value
let [ , , thirdCity] = cities;
console.log(thirdCity); //Paris

//ARRAY OBJECTS
const places = ['Londres', 'New York', 'Madrid', 'Paris', { idioma: 'ingles' }];
//Now if we wanted to get the idioma value in a variable we do it as follow.
let [, , , , {idioma}] = places
console.log(idioma); // ingles
//Or to get all the object inside the array:
let [, , , , obj] = places;
console.log(obj); // {idioma: 'ingles'}

const customer = {
     tipo: 'Premium',
     saldo: 3000,
     datos: {
          nombre: 'Pedro',
          apellido: 'Perez',
          residencia: {
               ciudad: 'México'
          }
     },
     movimientos: ['12-03-2018', '12-03-2018', '12-03-2018']
}

let {datos:{residencia}} = customer
console.log(residencia);

//Now to declare variables with the values od the array inside the object:
let {movimientos: [, second]} = customer;
console.log(second);