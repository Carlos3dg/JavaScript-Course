//Numeros es JavaScript
const numero1=5, numero2=8, numero3=10, numero4=3.7, numero5=-3;

let resultado;
//sume
resultado=numero1+numero3;

//resta
resultado=numero5-numero2;

//multiplicación
resultado=numero2*numero4;

//división
resultado=numero3/numero1;

//modulo o residuo
resultado=numero3%numero1;

resultado=numero3%numero2;

//PI
resultado=Math.PI;

//redondeo
resultado=Math.round(numero4);

resultado=Math.ceil(4.3); //redondeo hacia arriba
resultado=Math.floor(4.8); //redondeo hacia abajo

//Raíz cuadrada
resultado=Math.sqrt(25);

//numeros absoluto (numeros que siempre estan positivos)
resultado=Math.abs(-3);

//Potencia
resultado=Math.pow(3,3);

//Minimo y máximo
resultado=Math.min(3,8,6,9,10,7);
resultado=Math.max(3,8,6,9,10,7);

//numero aleatorio
resultado=Math.random();


let puntaje;

//Tipos de dato en JavaScript - Primitivos
let valor;

valor=3; //number
valor='carlos'; //string
valor=false; //boolean
valor=null; //object
valor=undefined; //undefined
valor=Symbol('Simbolo'); //Symbol

console.log(typeof valor);

//Tipos de dato en JavaScript - De Referencia (aquellos que son objetos)
let valor2;

valor2=[1,2,3,4]; //Arreglo

valor2= {
    nombre:'carlos' //Objeto
}

valor2=new Date(); //Fecha

console.log(typeof valor2);




