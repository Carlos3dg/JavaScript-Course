/*--------VARIABLES------*/
const carrito = document.getElementById('carrito'); //Contenedor despliegue del carrito             
const cursos = document.getElementById('lista-cursos'); //Contenedor de cursos
const listaCursos = document.querySelector('#lista-carrito tbody'); // <tbody> dentro del contenedor despliegue del carrito
const vaciarCarritoBtn = document.getElementById('vaciar-carrito'); //Boton Vaciar Carrito

/*--------EVENT LISTENERS-------*/
cargarEventListeners();

function cargarEventListeners(){
    //Evento para el contenedor 'lista-cursos' (Delegation)
    cursos.addEventListener('click', AgregarCarrito);
    //Evento para el contenedor despliegue del carrito (Delegation)
    carrito.addEventListener('click', borrarCurso);
    //Evento para el botón Vaciar Carrito 
    vaciarCarritoBtn.addEventListener('click', VaciarCarrito);
    //Evento para cargar LocalStorage en DOM cuando éste se cargue
    document.addEventListener('DOMContentLoaded', DOMimportLS);
}

/*--------FUNCTIONS-------*/
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

//Función para guardar todos los datos del contenedor en un objeto
function leerDatosCurso(cursoCard){
    const infoCurso = {
        imagen: cursoCard.querySelector('img').src,
        titulo: cursoCard.querySelector('h4').textContent,
        precio: cursoCard.querySelector('.precio span').textContent,
        id: cursoCard.querySelector('a').getAttribute('data-id')
    };
    //Se hace el llamado de la función que va insertar los datos del curso en el contenedor que despliega el carrito
    insertarDatosCurso(infoCurso); //Le damos el valor del objeto infoCurso al parametro de la función
}

//Función que inserta los datos del curso en el contenedor despliegue
function insertarDatosCurso(infoCurso){
    //Se declará una variable la cuál será un nuevo elemento HTML
    const row = document.createElement('tr');
    //Se insertan los datos del curso a el nuevo elemento creado
    row.innerHTML = `
        <td>
            <img src="${infoCurso.imagen}" width="100">
        </td>
        <td>${infoCurso.titulo}</td>
        <td>${infoCurso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${infoCurso.id}">X</a>
        </td>
    `;
    //Se hace el llamado al padre del elemento que hemos creado, en este caso la variable global listaCursos y se crea el elemento
    listaCursos.appendChild(row);

    //Se hace el llamado a la función que almacenará los datos en LocalStorage
    almacenarCursosLocalStorage(infoCurso); //le pasamos el valor de infoCurso a su respectivo parametro de función
}

//Función para borrar del DOM los cursos agregados al carrito 
function borrarCurso(e){
    e.preventDefault();
    //Se detecta el boton X en el delegation
    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove() //Se elimina el padre de el padre (<tr>) de el elemento detectado 
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }

    borrarCursosLocalStorage(cursoId);
}

//Función que elimina todos los cursos en el carrito dando click en Vaciar Carrito
function VaciarCarrito(e){
    e.preventDefault();
    //Ejecutar while mientras listaCursos tenga un primer hijo
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);//Eliminar de listaCursos el primer hijo
    }

    localStorage.clear(); //Eliminamos los cursos de Local Storage 
}

//Función que almacena los cursos en Local Storage
function almacenarCursosLocalStorage(NuevoCurso){
    let cursos;
    cursos = TransformarLocalStorageInArray(); //Se iguala la variable a el valor retornado por la función TransformarLocalStorageInArray()
    cursos.push(NuevoCurso); //Se le agrega el Nuevo curso a el array que hicimos en el paso anterior

    localStorage.setItem('cursos', JSON.stringify(cursos)); //Hacemos un nuevo almacenamiento para LS y le pasamos el array cursos transformandolo a string
}

//Función que transforma los strings de LS en arreglos
function TransformarLocalStorageInArray(){
    let CursosLS;

    if (localStorage.getItem('cursos') === null) {
        CursosLS = [];
    } else {
        CursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return CursosLS;
}

//Función para reflejar el contenido almacenado en localStorage en el DOM cada vez que éste se cargue
function DOMimportLS() {
    let importCursos;
    importCursos = TransformarLocalStorageInArray();
    importCursos.forEach(function(curso){
        //Se declará una variable la cuál será un nuevo elemento HTML
        const row = document.createElement('tr');
        //Se insertan los datos del curso a el nuevo elemento creado
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;

        listaCursos.appendChild(row);
    });
}

//Función para borrar los cursos de local Storage
function borrarCursosLocalStorage(idDeleted){
    //Importamos los datos almacenados en LS 
    let importCursos;
    importCursos = TransformarLocalStorageInArray();//Se hace arreglo la variable
    //Se lee cada elemento del arreglo y se compará su id con el id que el usuario esta borrando
    importCursos.forEach(function(curso, index){
        if (curso.id === idDeleted){
            importCursos.splice(index, 1);
        }
    })
    //Se insertan los valores actualizados a localStorage
    localStorage.setItem('cursos', JSON.stringify(importCursos));
}