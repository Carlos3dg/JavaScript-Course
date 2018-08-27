//Click Event Listener:
    document.querySelector('#submit-buscador').addEventListener('click', function(e){
    e.preventDefault();
    alert('Buscando Cursos');
    });

    //Al dar click sobre el objeto al cual se le esta agregando un evento se crea un evento llamado mouseClick el cual puede ser accedido dentro de la función, en este caso e es un parametro que contiene información acerca del evento que se esta produciendo.

    //Información del evento(e):
    document.querySelector('#encabezado').addEventListener('click', click_main_title);

    function click_main_title(e){
        let evento;
        evento = e; //Se iguala la varia a e: contiene un objeto llamado MouseEvent

        evento=e.target; //Se accede al elemento enlazado con el evento click (<h1 id="encabezado>Cursos En Línea")

        evento=e.target.innerText='Nuevos Cursos!'; //Al agregar target somos capaces de acceder y cambiar el id o la clase del elemento o incluso cambiar el contenido dentro de sus etiquetas

        console.log(evento);
    }
    //MouseEvent es un objeto que se crea con el evento click y contiene atributos como la posición en la que se hizo click, el path con el cual se llega al objeto donde se hizo click, por ejemplo: Document-->HTML-->Body-->h1, tambien contiene la información del elemento sobre el cual se hizo click, etc.

//Otros eventos con el mouse
    let botonCarrito = document.querySelector('.agregar-carrito');

    //Click
    botonCarrito.addEventListener('click', EventType);

    //Double Click:
    //botonCarrito.addEventListener('dblclick', EventType);

    //Mouse Enter: Funciona solo colocando el cursor encima del elemento
    //botonCarrito.addEventListener('mouseenter', EventType);

    //Mouse Leave:Funciona al momento de quitar el cursor sobre un elemento
    //botonCarrito.addEventListener('mouseleave', EventType);

    //Mouse over: Similar a mouse enter, se activa al pasar el mouse sobre el elemento
    //botonCarrito.addEventListener('mouseover', EventType);

    //Mouse Out: Similar a mouse leave, funciona cuando el cursor deja el elemento
    //botonCarrito.addEventListener('mouseout', EventType);

    //Mouse Down: Similar a click, a diferencia de este click se activa cuando das click y despues sueltas y mousedown se activa cuando das click aun y cuando no hayas soltado
    //botonCarrito.addEventListener('mousedown', EventType);

    //Mouse Up: Se activa cuando dejas de soltar un elemento con el click
    //botonCarrito.addEventListener('mouseup', EventType);

    //mousemove: Se activa al mover el mouse sobre el elemento
    botonCarrito.addEventListener('mousemove', EventType);

    function EventType(e){
        console.log(`Evento: ${e.type}`);   
    }

//Eventos para los inputs
    //keydown: Es un evento que se ejecuta cada vez que se teclea sobre un inputo o cualquier otro elemento capaz de ser tecleado.
    let buscador = document.querySelector('#buscador');

    //buscador.addEventListener('keydown', inputEvent);

    //keyup: Se ejecuta cada vez que soltemos una tecla del elemento sobre el cual estemos escribiendo

    //buscador.addEventListener('keyup', inputEvent);

    //keypress: Similar a keydown, se ejecuta cada vez que se presiona una tecla sobre el elemento el cual estamos escribiendo.

    //buscador.addEventListener('keypress', inputEvent);

    //focus: Este evento es llamado cuando un elemento posee el foco en el navegador
    //buscador.addEventListener('focus', inputEvent);

    //blur: Se ejecuta cuando el elemento pierde el foco, es decir cuando el usuario deja el elemento y da clic a otro elemento
    //buscador.addEventListener('blur', inputEvent);

    //cut: Evento que escucha cada vez que un usuario corta el texto o contenido en el elemento enlazado, por lo general solo es llamado con ctrl + x (cortar)
    buscador.addEventListener('cut', inputEvent);

    //copy: Su función es detectar cuando el contenido de un elemento es copiado (ctrl + c)
    buscador.addEventListener('copy', inputEvent);

    //paste:Su función es detectar cuando el contenido de un elemento es pegado (ctrl + v)
    buscador.addEventListener('paste', inputEvent);

    //input: Es el evento que reacciona a todos los anteriores (todo en uno)
    buscador.addEventListener('input', inputEvent);

    //change: Se utiliza mucho en un select para detectar los cambios de opciones que realize el usuario.

    function inputEvent(e){
        console.log(buscador.value);
        console.log(`Evento: ${e.type}`);
    }
    
//Event Bubbling:
//Es un mal entendimiento a la hora de ejecutar un evento enlazado con un elemento que se encuentra dentro de otro elemento el cual tambien tiene su propio evento.
//Ejemplo:
/*<div class="card">
    <div class="info-card">
        <a href="#" class="agregar-carrito"></a>
    </div>
</div>*/

//imaginemos que estamos trabajando con el código de arriba y a cada elemento le queremos agregar un evento:
document.querySelector('.card').addEventListener('click', cardEvent);

document.querySelector('.info-card').addEventListener('click', infoEvent);

document.querySelector('.agregar-carrito').addEventListener('click', carritoEvent);

function cardEvent(e){
    console.log('click en card');
    e.stopPropagation();
}

function infoEvent(e){
    console.log('click en info');
    e.stopPropagation();
}

function carritoEvent(e){
    console.log('click en carrito');
    e.stopPropagation();
}
//Lo que sucederá es que al momento de darle click al elemento .agregar-carrito también se ejecutarán los eventos de .card e .info-card debido a que .agregar-carrito se encuentra dentro de estos dos anteriores, una forma de evitar esto es agregando el metodo stopPropagation().