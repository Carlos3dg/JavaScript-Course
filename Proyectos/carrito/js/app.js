//VARIABLES
const carrito = document.getElementById('carrito'); //Contenedor despliegue del carrito             
const cursos = document.getElementById('lista-cursos'); //Contenedor de cursos

//EVENT LISTENERS
cargarEventListeners();

function cargarEventListeners(){
    //Evento para el contenedor 'lista-cursos' (Delegation)
    cursos.addEventListener('click', AgregarCarrito);
}

//FUNCTIONS
// Función para tomar el contenedor que tiene todos los datos del curso
function AgregarCarrito(e){
    e.preventDefault();
    //Detectamos el botón Agregar carrito en nuestro delegation
    if (e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement; //Seleccionamos el elemento padre que tiene toda la información del curso
        //Se llama a la función que leerá los datos del curso que se agregó
        leerDatosCurso(curso);
    }
}

//
function leerDatosCurso(cursoBox){
    console.log(cursoBox);
}