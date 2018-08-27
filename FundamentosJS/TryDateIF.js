//Manejando los errores con Try Catch

function myMonth(mes){
    const meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // mes= prompt('Ingresa el numero del mes que quieras') - 1; //Se le asigna un valor al argumento mes

    if (meses[mes] != null) {
        console.log(`El mes es: ${meses[mes]}`);
    } else {
        throw "Mes Ivalido"; //Arroja la excepcion con el valor 'Mes Invalido'
    }
}

try {
    myMonth(); //Ejecuta la función esperando que sea un exito de caso contrario atrapa la excepcion
} catch (error) { //El argumento error guarda el valor de la excepcion, en este caso el valor es 'Mes Invalido'
    // alert(error); //Se escribe una acción a realizar en caso de que try atrape una excepcion.
}

/*try{
    obtenerClientes();
} catch (error) {
    console.log(error);
}

function obtenerClientes (){
    console.log('Descargando...');

    setTimeout(function(){
        console.log('Completado')
    }, 3000);
}
*/

//Fechas en JavaScript
const diaHoy = new Date(); //Se crea un objeto llamado Fecha

let valor;

//Obtener el mes actual 
valor=diaHoy.getMonth(); 
console.log(valor);
/*Nota. El valor que se imprime es un numero antes del correspondiente al mes actual, esto es debido a que javascript cuenta los meses desde 0 hasta 11*/

//Obtener el día actual
valor=diaHoy.getDate(); //Obtiene el día actual dentro del mes
console.log(valor);

valor=diaHoy.getDay(); //Obtiene el día actual dentro de una semana
console.log(valor);

//Obtener el año actual
valor=diaHoy.getFullYear();
console.log(valor);

//Obtener Minutos
valor=diaHoy.getMinutes(); //Obtiene los minutos transcurridos dentro de una hora especifica.
console.log(valor);

//Obtener Horas
valor=diaHoy.getHours(); //Obtiene las 23, las 24, las 15, etc de horas.
console.log(valor);

//Obtener milisegundos desde 1970
valor = diaHoy.getTime();
console.log(valor);

//Modificar año, mes, dia con set
valor = diaHoy.setFullYear('2014');
valor=diaHoy.getFullYear();
console.log(valor);

let saludo;
let fecha;
let hora;

fecha = new Date();

hora = fecha.getHours();

if (hora < 5){
    console.log('Buenas Madrugadas');
} else if (hora < 12){
    console.log('Buenos Días');
} else if (hora < 19) {
    console.log('Buenas Tardes');
} else if (hora <= 23) {
    console.log('Buenas Noches')
}

var bandera, month;

let dia = new Date();

bandera = dia.getDate();
month = dia.getMonth();

if (bandera == 27 && month == 6) {
    console.log('Feliz día de la Bandera')
}

