//Objetos es JavaScript

//Creando un objeto 
let auto={
    Modelo: 'Aveo',
    Año: 2015,
    Color: 'Rojo',
    Puertas: 4,
    Transmisión: 'Estandar',
    Detalles: ['Clima', 'Estereo', 'GPS'],
    Propietario: {
        Nombre: 'Jose Carlos',
        Apellidos: 'Obregón Carranza',
        Teléfono: 8186010650,
        Edad: 45,
        Nacimiento: function(){
            return new Date().getFullYear() - this.Edad
        }

    }
};
console.log(auto);
console.log(auto.Propietario.Nacimiento()); 
console.log(auto['Color']); //Otra forma (alternativa) de acceder a la propiedad de un objeto.

/*
Notas.
1. En un objeto se declaran llaves y valores, siendo las llaves las propiedades y los valores lo que esta despues de las propiedades.
2. Dentro de un objeto se pueden declarar objetos con mas propiedades dentro de ellos.
3. Dentro de un objeto se pueden declarar funciones las cuales se les conoce como métodos.
4. Un objeto puede contener Strings, numeros, arreglos, etc.
5. Observa como se utiliza 'this' para acceder a la propiedad Edad dentro del objeto.
*/
/*---------------------------------------------------------*/
// Creando Arreglos de Objetos
    const automovil=[
        {Modelo: 'Chevy Monza', Año: 2008},
        {Modelo: 'Aveo', Año: 2015},
        {Modelo: 'Spark', Año: 2017}
    ];

    console.log(automovil); //Genera una unica impresión de todos los datos dentro del arreglo

    console.log(automovil[0].Modelo); //Iimprime el modelo de esa posición

    //Para imprimir los datos por separado se puede utilizar un for:
    for (let i=0; i<automovil.length; i++) {
        console.log(automovil[i])
    }; //Imprime cada posición por separado

// Funciones en JavaScript
//Function Declaration
    function saludo(){
        console.log('Hola carlos!');
    }

    saludo(); //Se escribe el nombre de la función para mandarla a llamar.

    function acceso(nombre){
        console.log(`Bienvenido(a) ${nombre}`)
    }

    acceso('Marlene'); //A diferencia de la función anterior aqui nos imprime un valor declarado desde afuera de la función.

    // Funciones que retornan un valor
    function potencia(a,b){
        return Math.pow(a,b);
    }

    let suma = potencia(5, 4);

    console.log(suma);

    // Funciones que retornan valor por default
    function ingreso(usuario='Visitante'){
        return `Bienvenido(a) ${usuario}`;
    }

    let userName = ingreso();
    console.log(userName); //Si no se ingresa ningún valor por fuera la función imprimira 'Bienvenido(a) Visitante'

    userName=ingreso('Graciela')
    console.log(userName); //En este caso si se da un valor desde fuera de la función al parametro usuario

    /*Nota. Se le conoce como parametro o argumento a los valores que puede tomar una función desde afuera: usuario en este caso es un parametro o argumento */

//Function Expression
    const recibir = function(a = 3, b = 8 ){
        return a + b
    }
    console.log(recibir()); //Imprimer la suma de los valores por defecto
    console.log(recibir(4,1)); //Imprime la suma de 4 + 1

    //Otro ejemplo
    const saludar = function(name='Brenda'){
        return `Buen día ${name}`;
    }
    console.log(saludar());
    console.log(saludar('Paulina'));

//Function IIFE: Funciones que se ejecutan directamente sin ser llamadas desde fuera
    (function()  {
        console.log('Aprendiendo siempre')
    })(); //Esta función ya aparece en la consola impresa

    //Mas ejemplos:
    (function(valores){
        console.log(`Valores: ${valores}`)
    })('Perseverancia');

    (function(x, y){
        console.log(x - y);
    })(9, 5);

//Funciones dentro de objetos(Métodos):
const carro = {
    velocidad: function(transmision) {
        console.log(`Introduciendo la ${transmision} velocidad`);
    }
}

carro.velocidad('6°');

//Métodos creados fuera de un objeto
carro.estado = function() {
    console.log('Encendido');
}

carro.estado();

console.log(carro);






