//VARIABLES
const email = document.getElementById('email'); // Obtiene el input email
const asunto = document.getElementById('asunto'); //Obtiene el input asunto
const mensaje = document.getElementById('mensaje'); //Obtiene el input mensaje
const btnEnviar = document.getElementById('enviar'); //Obtiene el button enviar
const formulario = document.getElementById('enviar-mail'); //Obtiene el formulario
const resetBtn = document.getElementById('resetBtn'); //Obtine el botón de Reset

//EVENT LISTENERS
eventListeners();

function eventListeners(){
    //Detecta la carga de la aplicación
    document.addEventListener('DOMContentLoaded', InicioApp);
    //Evento para detectar la deshabilitación del foco
    email.addEventListener('blur', unfocusCampo); //Blur se ejecuta cuando se quita el foco de el campo
    asunto.addEventListener('blur', unfocusCampo);
    mensaje.addEventListener('blur', unfocusCampo);
    //Evento que detecta cuando el usuario hace un submit en el formulario
    formulario.addEventListener('submit', enviarFormulario);
    //Evento para detectar cada click en el botón Reset
    resetBtn.addEventListener('click', limpiarFormulario);
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
    } else {
        btnEnviar.disabled = true;
    }
}

//Función a ejecutar cuando el formulario es enviado
function enviarFormulario(e){
    e.preventDefault();
    //Habilitamos el spinner de carga 
    const spinner = document.querySelector('#spinner');    
    spinner.style.display = "block";
    //Creamos el elemento img que tendrá el gif de mensaje enviado
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block'
    //Definimos un limite de tiempo para volver a deshabilitar nuestro spinner en este caso se definierón 3 seg.
    setTimeout(function(){
        spinner.style.display = 'none'; //Deshabilitamos el spinner
        document.querySelector('#loaders').appendChild(enviado); //Insertamos el elemento creado inmediatamente despues de deshabilitar el spinner
        //Definimos un rango de tiempo en el cual nuestro gif será eliminado y nuestro formulario borrado
        setTimeout(function(){
            enviado.remove();
            formulario.reset();
            //Tanto reset() como remove() se ejecutarán despues de 4 segundos de haber 
        }, 4000);

    }, 3000);
}


//Limpiar formulario 
function limpiarFormulario(e){
    e.preventDefault();

    formulario.reset();
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