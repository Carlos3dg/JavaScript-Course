//DESTRCUTURING ARRAYS
const cities = ['New York', 'London', 'Paris', 'Monterrey'];

//Destructor
let [city1] = cities;
console.log(city1); //New York
//Here we select the first element of our array

[city1, city2] = cities;
console.log(city1, city2); //New York London

//Now if we wanted to select the last element or one of the middles:
let [ , , paris] = cities;
console.log(paris) //Paris

//Objects into arrays:
const profesions = ['Project Manager', 'Human Resources Manager', { WebDeloper: 'Web Developer', softwareDeveloper: 'Software Developer', mobileDveloper: 'Mobile Dveloper'}];
const [ , , {mobileDveloper}] = profesions;
console.log(mobileDveloper); // Mobile Developer
//Here we used comas to pass away the first two elements and then get acces to our object element to can declare the mobileDeveloper variable bound to the mobileDeveloper property.

//Arrays into objects
const clients = {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}

//To access to the objects inside objects
let {datos: {residencia: {ciudad}}} = clients;
console.log(ciudad); //Mexico

//To acces to the elemens inside the array
let { movimientos: [firstDate] } = clients;
console.log(firstDate); //12-03-2018
