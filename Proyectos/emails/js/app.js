//VARIABLES
const email = document.getElementById('email'); // Obtiene el input email
const asunto = document.getElementById('asunto'); //Obtiene el input asunto
const mensaje = document.getElementById('mensaje'); //Obtiene el input mensaje
const btnEnviar = document.getElementById('enviar'); //Obtiene el button enviar

//EVENT LISTENERS
eventListeners();

function eventListeners(){
    //Detecta la carga de la aplicación
    document.addEventListener('DOMContentLoaded', InicioApp);
    //Evento para detectar la deshabilitación del foco
    email.addEventListener('blur', unfocusCampo); //Blur se ejecuta cuando se quita el foco de el campo
    asunto.addEventListener('blur', unfocusCampo);
    mensaje.addEventListener('blur', unfocusCampo);
}

//FUNCTIONS

//Función a ejecutar cuando el contenido del sitio sea cargado
function InicioApp() {
    //Se deshabilita el botón de enviar con la propiedad disabled = true
    btnEnviar.disabled = true;
}

//Función para detectar aquellos inputs que dejan de tener el foco
function unfocusCampo() {
    //Detectamos el campo al cual se le ejecuto el evento (similar a e.target solo que este ultimo aplica con delegations)
    validarCampo(this); //'this' es el valor del parametro de la función y esta detectando el campo que ejecutó el evento.
    //Leemos el type del input que dejo el foco
    if (this.type === 'email') {
        validarEmail(this); //Pasamos e input email en caso de cumplirse la condición
    }

    //We create a variable that will storage all the elements with error class
    let errores = document.querySelectorAll('.error');
    console.log(errores.length)
    //A condition to know if any of the inputs are empty or not
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0){
            //if there's not error classes in one of the elements and any of them are empty then we enable the button again
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }
}

//Función para validar campo, se le pasa el parametro campo con el valor que 'this' esta enviando
function validarCampo(campo) {
    //campo es igual a 'this', es decir, a el input al que se le dejó el foco
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}

//Función para validar que el campo email contenga un @ 
function validarEmail(campo) {
    //Se lee el valor del campo y se utiliza el método indexOf() para buscar la posición del caracter @ (en caso de no contar con dicho caracter este método regresa un -1).
    if (campo.value.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error');
    }
}