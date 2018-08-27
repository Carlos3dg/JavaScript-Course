//Delegation: 
//Selecciona todo nuestro documento para ser escuchado por un EventListener y aplica la acción declarada en el evento solo a los elementos que desiemos.
    document.body.addEventListener('click', EliminarElemento); //Enlazamos todo nuestro documento al evento click

    function EliminarElemento(e){
        e.preventDefault(); //Cancelamos todas las acciones por Default de los elementos

        console.log(e.target.classList); //Conceguimos las clases que contiene un elemento al cual se le de un click

        if (e.target.classList.contains('borrar-curso')){
            e.target.parentElement.parentElement.remove(); //Se realiza una condición la cuál dice que si cierto elemento se da clic entonces se realize cierta acción
        }
        if(e.target.id == 'vaciar-carrito'){
            document.querySelector('.borrar-curso').parentElement.parentElement.parentElement.remove();

        }
    }

//LocalStorage
//Es un almacenamiento directo en el navegador del usuario el cuál conserva la información aún cuando la página haga un refresh o cuando el usuario cierre el navegador y vuelva a abrirlo.

//Para guardar en LocalStorage:
localStorage.setItem('nombre', 'Carlos'); //Se crea un key llamado nombre el cual tiene el valor de Carlos

//Para obtener el lo almacenado en LocalStorage:
let nombre=localStorage.getItem('nombre');
console.log(nombre)

//Para eliminar en LocalStorage:
localStorage.removeItem('nombre');

//Para vaciar todo el localStorage:
localStorage.clear()