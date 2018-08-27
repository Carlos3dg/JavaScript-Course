//Seleccionando un elemento en JavaScript
    //querySelector
    //QuerySelector usa una sintaxis similar a la de jQuery y distingue las propiedades id y clase de la misma forma que css: . si es clase y # si es id:
    let encabezado1 = document.querySelector('#encabezado'); //id
    console.log(encabezado1); //<h1 id="encabezado" class= "encabezado">Cursos en Línea</h1>

    encabezado1.style.fontSize = "35px";

    let columns = document.querySelector('.four'); //class

    console.log(columns); //<idv class="four">..</div>

    let logo = document.querySelector('#logo'); //id

    logo.style.height = '90px';

    let image = document.querySelector('img');

    console.log(image); //Selecciona la primer imágen del documento

    image = document.querySelector('.card img');

    console.log(image); //Regresa la primer imágen que se encuentra dentro de la clase .card

    /*Nota: querySelector puede seleccionar un elemento mediante su clase o su etiqueta, pero no selecciona multiples elementos solo por usar estos identificadores sino que agarra el primer elemento en el documento con esa clase o con esa etiqueta.*/

    //getElementsByClassName
    //Selecciona los elementos por clase, a diferencia de querySelector este si selecciona todos los elementos que tengan  la misma clase:
    let enlaces = document.getElementsByClassName('enlace');
    console.log(enlaces); //Regresa un HTMLCollection con todos los elementos con class = 'enlace'

    enlaces[3].style.backgroundColor = '#ff0000'; //Se puede acceder a cada uno de estos enlaces de forma individual como en un arreglo
    console.log(enlaces);

    //getElementsByTagNname
    //Selecciona los elementos por su etiqueta:
    let links = document.getElementsByTagName('a'); 
    console.log(links); //Se crea un HTMLCollection con todos los elementos <a>

    links[22].style.color="#00ff00"; //Se puede acceder a ellos individualmente como si fuera un arreglo

    let links_array = Array.from(links);
    console.log(links_array); //ahora lo que antes era un HTMLCollection es un arreglo

    links_array.forEach(function(enlace){
        console.log(enlace.textContent);
    }) //Imprime el texto de todos los enlaces 

    //QuerySelectorAll
    //Selecciona elementos por clase(.), id(#) o etiqueta, a diferencia de QuerySelector este si selecciona todos los elementos que tengan el identificador que se este indicando
    links = document.querySelectorAll('#principal a:nth-child(odd)');
    console.log(links);
    
    links.forEach(function(impares){
        impares.style.color = 'green'
    });

//TRAVERSING EN JAVASCRIPT
const navegacion = document.querySelector('#principal'); //Se iguala a la etiqueta nav

console.log(navegacion); //Primeramente navegacion regresa la etiqueta nav con sus atributos y contenido

console.log(navegacion.childNodes); //La propiedad childNodes regresa los hijos del elemento nav en forma de arreglo solo que esta propiedad cuenta los saltos de linea dentro del código y cada salto es un elemento dentro de ese arreglo representado como text.

console.log(navegacion.children); //De esta forma se es más directo a la hora de llamar a los hijos de un elemento, aqui unicamente se imprimen las etiquetas <a> dentro de nav en forma de arreglo.

console.log(navegacion.children[0]); //Con la propiedad children se crea un HTMLCollection y como este es un arreglo entonces podemos llamar a los elementos dentro de ese arreglo, en este caso el primer elemento <a> dentro de nav

console.log(navegacion.children[0].nodeName); //la propiedad nodeName regresa el nombre del elemento que se esta seleccionando. El resultado de esta linea es "A".

console.log(navegacion.children[0].nodeType); //nodeType es una propiedad que regresa el tipo de lo que se esta mandando a llamar. En este caso regresa un 1 debido a que el statement "navegacion.children[0]" hace llamada a un elemento. Si hicieramos llamado a un atributo o a un texto regresaria otro tipo de numero como los siguientes: 
// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = Comentarios
// 9 = documentos
// 10 = doctype

//Mas ejemplos:
const barra = document.querySelector('.barra')

console.log(barra.children); //Imprime el hijo de <div class="barra"> en este caso otro div con class="container"

console.log(barra.children[0].children); //Se accede al hijo del div container y asi se puede navegar llendo de en hijo en hijo hasta llegar al elemento que se quiere configurar.

const cursos = document.querySelectorAll('.card'); //Se accede al container que tiene todos los cursos

console.log(cursos);

console.log(cursos[0].lastElementChild)//Se accede al ultimo hijo del primer elemento hijo dentro de cursos

console.log(cursos[0].firstElementChild)//Se accede al primer hijo dentro del primer elemento hijo de .card

//Traversing (parte 2) del hijo al padre 
    //1. Seleccionamos un elemento en especifico, es este caso todos los enlaces.
    let enlace = document.querySelectorAll('.enlace');
    console.log(enlace); //Regresa todos los encales que hay en el documento

    //2. Lo siguiente es seleccionar el elemento padre de esos enlaces, en este caso el padre es <nav>
    const padreEnlaces = enlace[0].parentElement;
    console.log(padreEnlaces); //Ahora tambien tenemos una variable con nuestro elemento nav

    //3. Si se quiere llegar al padre de el elemento nav se esribe la propiedad parentElement como en el ejemplo anterior pero si se desea llegar al padre del padre es:
    console.log(padreEnlaces.parentElement.parentElement) //Con este resultado llegamos a un div class=row y lo realizado se imprime como sigue:
    // 1. [a.enlace, a.enlace, a.enlace ....]
    //2 <nav>..</nav>
    // --Se brinca el padre del nav (div class="four colums")
    //3. div class='row'>..</div>

    //Ejemplo de traversing:
    //En este ejemplo partiremos desde los div que contienen los cursos: <div class="card">
    let courseContainer = document.querySelectorAll('.card');
    console.log(courseContainer); //Ahora se tienen todos los div con la etiqueta card

    //2. Lo siguiente es seleccionar uno de esos div
    console.log(courseContainer[0]); //Ahora ya se tiene acceso al primer div el cual cotiene el primer curso del listado

    //3. Lo siguiente es hacer un poco de traversing mandando a llamar a varios de sus padres
    console.log(courseContainer[0].parentElement.parentElement.parentElement); //Aqui ya pudimos localizar al contenedor que tiene todos los cursos y el encabezado.

    //4. Una vez que ya hayamos localizado el elemento que estabamos buscando intentamos hacerle una modificación a su primer hijo en este caso el encabezado
    courseContainer[0].parentElement.parentElement.parentElement.firstElementChild.textContent='Mi texto desde traversing'
    //Ahora dentro del documento el encabezado dice 'Mi texto desde traversing'

    //Siblings - Traversing
    //Recorrer en los elementos que son hermanos
    enlace = document.querySelectorAll('.enlace');
    console.log(enlace); //Ahora tenemos un NodeList(array) de los enlaces dentro del documento

    //Seleccionamos un enlace en especifico y enseguida colocamos previousElementSibling
    let hermano = enlace[3].previousElementSibling;
    console.log(hermano); //El resultado debe imprimir el elemento enlace[2] en este caso aplicaciones moviles

    //nextElementSibling
    hermano = enlace[3].nextElementSibling;
    console.log(hermano); //Ahora se obtiene el elemento enlace[4] o en su defecto en enlace Temas.

    

