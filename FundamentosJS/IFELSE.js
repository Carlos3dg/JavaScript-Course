//Estructuras de control IF ELSE ELSEIF
let cal1=8, cal2=3, cal3=9;

let promedio = (cal1 + cal2 + cal3)/3;

if (Math.round(promedio)>=7) {
    console.log(`Aprobaste el semeste con ${Math.round(promedio)}`)
} else {
    console.log(`Reprobaste el semestre con ${Math.round(promedio)}`)
}

var compra, descuento, total;

compra=100;
descuento=0.20;

if (compra>200) {
    total = (compra - (compra * 0.20));
    console.log(`Total: ${total}`)
} else {
    total = compra;
    console.log(`Total: ${total}`)
}

//Obtener el numero mayor de 4 numeros:
    let num1, num2, num3, num4;

    num1=250;
    num2=235;
    num3=588;
    num4=864;

    if (num1>num2){
        if (num1>num3){
            if (num1>num4){
                console.log(num1);
            }
            else {
                console.log(num4);
            }
        }
        else if (num3>num4) {
            console.log(num3);
        } else {
            console.log(num4);
        }
    } else if (num2>num3) {
        if (num2>num4){
            console.log(num2);
        }
        else {
            console.log(num4);
        }
    } else if(num3>num4){
        console.log(num3);
    } else{
        console.log(num4);
    }

// Operadores &&(and) y ||(or) en IF
    //Obtener el numero mayor de tres numeros
    num1=458;
    num2=205;
    num3=3058;

    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }

    //Mandar mensaje de Buenos dias, buenas tardes, buenas noches o buenas madrugadas dependiendo de la hora
    let horaObject = new Date();
    let hora = horaObject.getHours();

    if (hora >= 6 && hora <= 11){
        console.log('Buenos días!');
    } else if(hora >= 12 && hora <= 18 ){
        console.log('Buenas Tardes!');
    } else if (hora >= 19 && hora <= 24) {
        console.log('Buenas Noches!');
    } else if (hora >= 1 && hora < 6) {
        console.log('Buenas Madrugadas');
    }

    //Iniciar sesión con nombre de usuario OR correo eletronico y su contraseña.
    let userName, correo, contraseña;

    userName='carlos3dg'
    contraseña='813dgcoo'

    if (((typeof userName != 'undefined') || (typeof correo != 'undefined')) && typeof contraseña != 'undefined' ){
        console.log(`Buenas Noches ${userName || correo}`)
    } else {
        console.log('contraseña o usuario no ingresado')
    }
    
    //If Ternarios (otra forma de declarar un IF)
    let edad = 18;

    console.log(edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad');
    /*Aquí se declara un IF en una sola linea donde edad >= 18 es la condición, el signo ? representa las llaves, el string 'Es mayor de edad' es la acción que se va realizar dentro de las llaves y los : significan else*/

    





