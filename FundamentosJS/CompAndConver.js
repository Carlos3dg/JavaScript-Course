//Comparación en JavaScript
let number1=3,
    number2=9,
    number3='21';

console.log(number1<number2);
console.log(number1>number2);
console.log(number2<number3);

console.log(35=='35'); //true (not stricted)
console.log(35==='35'); //false (stricted)

//Diferente de...
console.log(number1 != number2);
console.log(5 != '5') //false (not stricted)
console.log(5 !== '5')//true (stricted)

//Comparación de strings
console.log('A'>'B'); //menor-mayor: ABCDEFG..., abcde
console.log('J'>'D'); //true
console.log('hola'>'HOLA'); //true

//Convertir strings a numeros en JavaScript
const numero1='50',
      numero2=30,
      numero3='cuarenta';

console.log(numero1 + numero2); //concatena
console.log(numero2 - numero1); //realiza resta

console.log(Number(numero1) + numero2); //realiza la suma

console.log(Number(numero3) + numero2); //imposible realizar operación NaN(Not a Number)

console.log(parseInt(numero1) + numero2); //similar a Number

console.log(parseInt(numero3) + numero2); //No se realiza la op (NaN)

//Funciones parseInt() y parseFloat()
let dato;

dato=Number('50'); //50
dato = Number('50.458'); //50.458
dato=Number(false); //0
dato=Number(true); //1
dato=Number([1,2,3,4]); //NaN
dato=Number(null); //0
dato = Number(undefined); //NaN

console.log(dato);

dato=parseInt('100.56'); //R= 100
dato=parseFloat('100.56'); //R= 100.56

console.log(dato);

//ToFixed
dato=1547.256849

console.log(dato.toFixed()); //1547
console.log(dato.toFixed(3)); //1547.257

//Convertir de un numero, booleano o arreglo a string
let objeto;

objeto=29;
objeto=String(objeto); // '29'

objeto=58;
objeto=objeto.toString(); //'58'
console.log(objeto);

objeto=true;
objeto=objeto.toString(); //'true'
console.log(objeto);

objeto=[1,2,3,4];
objeto=String(objeto); //'1,2,3,4'
objeto=objeto.toString(); //'1,2,3,4'
console.log(objeto);

//Template literals o string template
let boleto1='Adulto',
    precio1= 50,
    boleto2='Niño',
    precio2=35;

let html;

//Template literals antes de ECMAScript6
html= '<ul>'+
        '<li>Boleto: ' + boleto1 + '</li>' + 
        '<li>Precion: ' + precio1 + '</li>' + 
        '<li>Boleto: ' + boleto2 + '</li>' + 
        '<li>Precio: ' + precio2 + '</li>' +
        '<li>Total: ' + (precio1 + precio2) + '</li>' + 
    '</ul>'; 

document.getElementById('app').innerHTML= html;

//Template literals con ECMAScript6
html=`<ul>
        <li>Boleto: ${boleto1} </li>
        <li>Precio: ${precio1} </li>
        <li>Boleto: ${boleto2} </li>
        <li>Precio: ${precio2} </li>
        <li>Total: ${Total(precio1, precio2)} </li>
    </ul>`

function Total(precio1, precio2) {
    return precio1 + precio2;
}

document.getElementById('app2').innerHTML=html;


