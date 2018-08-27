let elemento;

elemento = document; //Ahora la variable elemento contiene todo el documento HTML desde la etiqueta <!DOCTYPE> hasta </html>

elemento = document.all; //Similar a document, con la diferencia de que ahora la variable contiene todas las etiquetas, ids, clases, etc y las guarda similar a un arreglo [html, head, meta] lo cual se conoce como HTMLALLCollection.

elemento = document.head; //Regresa todas las etiquetas y atributos dentro de <head>...</head>

elemento = document.body; //etiquetas dentro de <body>

elemento = document.domain; //Regresa el nombre de dominio del sitio.

elemento = document.URL; //Regresa la URL del sitio: esquema: //máquina/directorio/archivo

elemento = document.characterSet; //UTF-8

elemento = document.forms; //Regresa los formularios dentro del documento de igual forma en HTMLALLCollecion

elemento = document.forms[0]; //Se accede al formulario en la posición 0 del HTMLALLCollection.

elemento = document.forms[0].id; //Regresa el id

elemento = document.forms[0].className; //Regresa las clases que contenga el elemento

elemento = document.forms[0].classList; //Regresa las cases pero en forma de un DOMTokenList, similar a un arreglo.

elemento = document.forms[0].classList[1]; //Regresa la clase 2 de la posición DOMTokenList de un elemento.

elemento = document.images; //imagenes del documento

elemento = document.images[2].src; //El valor src del tercer elemento dentro del HTMLALLCollection

elemento = document.images[2].getAttribute('src')//Regresa el valor del src tambien.


let imagenes = document.images;

let imagenesARR = Array.from(imagenes);// Transforma el HTMLALLCollection a arreglo

imagenesARR.forEach(function(imagenes){
    console.log(imagenes);
});  //imprime imagen por imagen.

console.log(imagenesARR);

//Seleccionando elementos y aplicandoles propiedadese
    //getEelementById
    elemento = document.getElementById('hero');

    console.log(elemento); //<div id="hero">...</div>

    elemento = document.getElementById('header').className

    console.log(elemento); //regresa el valor 'header' de la clase 

    let encabezado = document.getElementById('encabezado').textContent;

    console.log(encabezado) //Regresa el contenido de texto dentro de las etiquetas que contienen el id 'encabezado'

    

