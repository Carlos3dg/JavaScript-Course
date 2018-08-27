//Creando Elementos con JavaScript
    //Ejemplo 1: Vamos a crear un enlace
    let enlaceNuevo = document.createElement('a') 
    console.log(enlaceNuevo); //Ya tenemos nuestro elemento <a>

    // 2. Ahora es necesario ir agregando sus atributos correspondientes

    enlaceNuevo.setAttribute('href' , '#'); //Nuestro enlace ahora tiene su atributo href y su valor correspondiente en este caso #

    enlaceNuevo.className = 'enlace' //Agregar un class con valor 'enlace'

    enlaceNuevo.id='nuevo-id' //Agregar un id con su corespondiente valor

    //3. Agregar contenido al enlace
    enlaceNuevo.textContent='Contacto' //Resultado: <a href="#" class="enlace" id="nuevo-id">Contacto</a>

    //4. Agregar al HTML
    //Seleccionamos el elemento donde lo vamos a poner dentro, en este caso <nav id='secundaria' y despues usamos appendChild:
    document.querySelector('#secundaria').appendChild(enlaceNuevo);

// Reemplazando elementos con JavaScript
    //1. Creamos el elemento que queremos agregar
    let nuevoEncabezado = document.createElement('h1');

    //2. Le agregamos un id
    nuevoEncabezado.id='encabezado'

    //3. Le agregamos texto
    nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

    //4. Comenzamos la sustitucion:
      //4.1 Localizamos al padre de el elemento que queremos sustituir:
      let padre = document.querySelector('.encabezado').parentElement;
      
      //4.2 Localizamos al elemento que queremos sustituir
      let viejoEncabezado = document.querySelector('.encabezado');

      //4.3 Utilizamos replaceChild para hacer la sustitución:
      padre.replaceChild(nuevoEncabezado, viejoEncabezado);

// Borrando elementos y atributos desde JavaScript:
    //Ejemplo de como borrar un enlace de los que estan abajo:
        //1. Localizamos a la lista de elementos donde se encuentra el que queremos borrar y posteriormente obtenemos al padre de esa lista:
        let enlaces = document.querySelectorAll('.enlace'); //hijos

        let padreEnlaces = enlaces[0].parentElement
        /*NOTA. No olvidemos hacer referencia a un elemento para posteriormente usar la propiedad parentElement. En este caso se referencia a el elemento 0*/

        //2. Borramos con la función removeChild()
        padreEnlaces.removeChild(enlaces[0]);

        enlaces[1].remove(); //Tambien lo pudimos haber hecho directamente con la función remove()

    //Ejemplo de como borrar y agregar una clase
        //1. Localizamos el elemento del cual queremos obtener su clase
        let link = document.querySelector('.enlace');

        console.log(link);

        link.classList.add('nueva-clase'); //Se agrega una nueva clase
        link.classList.remove('enlace'); //Se borra una clase

        console.log(link.classList);

    //Ejemplo de como borrar y agregar un atributo

        let atribute;
        atribute = link.getAttribute('href'); //Obtiene el valor del atributo href

        link.setAttribute('href', 'www.facebook.com'); //Se da un nuevo valor a nuestro atributo
        

        link.setAttribute('data-id', 20); //Se crea un propio atributo con todo y valor.
        

        link.removeAttribute('data-id'); //Se borra el atributo

        console.log(link);

    //Preguntar si un elemento tiene cierto atributo
        link.hasAttribute('href') //regresa un true por tener el atributo

        console.log(link.hasAttribute('href'));
    


    
