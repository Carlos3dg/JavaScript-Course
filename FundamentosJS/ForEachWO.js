//ForEach
    const materias = ['Matemáticas', 'Desarrollo', 'Redes', 'Sistemas Operativos'];


    //Uso de For para imprimir un arreglo
    for(i = 0; i < materias.length; i++){
        console.log(materias[i]);
    }

    //Uso de ForEach
    materias.forEach(function(materia){
        console.log(`${materia}`);
    }) 
    /*Se utiliza una función dentro del forEach para imprimir el arreglo*/

    let arreglo1 = [3, 8, 1, 6, 7];
//Sintaxis de un forEeach:
    arreglo1.forEach(function(element, index, array){
        //console.log(element + ' element'); // 3, 8, 1, 6, 7
        //console.log(index + ' index'); //0, 1, 2, 3, 4
        console.log(array + ' array'); //returns the entire array

    })
//Un forEach omite los espacios en blanco:
    let array2 = [1, 2, , 4];

    console.log(array2); 

    array2.forEach(function(element, index, array){
        console.log('a[' + index + '] =' + element);
    }); //returns: a[0] = 1, a[1] = 2, a[3] = 4;


//Map
    const carrito = [
        {id: 1, producto: 'Convers'},
        {id: 2, producto: 'Camisa'},
        {id: 3, producto: 'Collar'},
        {id: 4, producto: 'Libro'}
    ];

    console.log(carrito);

    const nombreProducto = carrito.map(function(carrito){
        return carrito.producto;
    });

    console.log(nombreProducto);
    /*Regresa un arreglo definido donde unicamente estan los productos*/

    //The arrow notation and more about map
    const cart = [{name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95}];

    const names = cart.map(x => x.name); //['Widget', 'Gadget']
    const prices = cart.map(x => x.price); //[9.95, 22.95]
    //const discountPrices = prices.map(x => x*0.8); //[7.96, 18.36]
    const lcNames = names.map(x => x.toLowerCase()); //[widget, gadget]
    console.log(names);
    console.log(prices);
    console.log(lcNames);

    //Como hacer un arreglo de objetos a base de dos con string y numeros:
    const items = ['Widget', 'Gadget'];
    const cost = [9.95, 22.95];

        const list = items.map((x, i) => ({name: x, price: cost[i]})); // returns [{name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95}]
   

   /* 2.    const list = items.map(function(x, i){
            return ({name: x, price: cost[i]})
        }) // returns [{name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95}]
    */
    //console.log(list);


//Imprimir un objeto con for
    const alumno = {
        matricula: 184907,
        carrera: 'LSCA',
        Tetramestre: '9°'
    };

    for(estudiante in alumno){
        console.log(`${estudiante}: ${alumno[estudiante]}`);
    };
    /*La funcion de un for.. in es recorrer las claves de propiedad de un objeto, en este caso estudiante ira recorriendo las propiedades del objeto alumno */

    const articulo = {
        Nombre: 'Jabon',
        Precio: 12.50,
        Gramos: 350
    };

// Window Object
  //Propiedades de Ancho y alto en la ventana:
    // 1. Se muestra el ancho y alto de la ventana en pixeles contando pestañas, barra de herramientas y scrollbars:
    let anchoNavegador, altoNavegador;

    anchoNavegador = window.outerWidth; // Se genera el valor del ancho de la ventana en pixeles
    altoNavegador = window.outerHeight; //Valor del alto de la ventana en pixeles 

    console.log(anchoNavegador); //Ambas toman en cuenta el scrollbar, toolbar y tabs
    console.log(altoNavegador);

    // 2. Se muestran el ancho y alto de la pantalla, es decir se toma en cuenta la barra de tareas y todo el ancho del monitor en si:
    let anchoPantalla, altoPantalla;

    anchoPantalla = window.screen.width;
    altoPantalla = window.screen.height;

    console.log(anchoPantalla); //Ancho de la pantalla
    console.log(altoPantalla); //Alto de la pantalla

    //3. Se muestran el ancho y alto disponibles para la página web en el navegador o en la ventana, aquí no se toman en cuenta las pestañas, barra de herramientas o scrollbars
    let anchoSitio, altoSitio;

    anchoSitio = window.innerWidth;
    altoSitio = window.innerHeight;

    console.log(anchoSitio); //Ancho visible para el sitio web
    console.log(altoSitio); //Alto visible para el sitio web

  //Propiedades Window Location
    //window.location.href: Regresa el URL de la página web:
    let url = window.location.href;

    console.log(url); //http://127.0.0.1:5500/index.html

    //window.location.hostname: Proporciona el nombre del host o en otras palabras el nombre de dominio de la página
    let hostname = window.location.hostname;

    console.log(hostname); //127.0.0.1 ó si fuera facebook por ejemplo: www.facebook.com

    //window.location.pathname: Regresaunicamente el pathname de una URL, es decir la información que se encuentra despues del dominio
    let pathname = window.location.pathname;

    console.log(pathname); // /index.html

    //window.location.protocol: Proporciona el protocolo que el sitio web este usando (http o https)
    let protocol = window.location.protocol;

    console.log(protocol); //http:

  //Propiedades Window Navigator: información acerca del navegador
    //window.navigator.appName: Regresa el nombre de la aplicación del navegador
    let name = window.navigator.appName;

    console.log(name); //Netscape

    //window.navigator.appVersion: Proporciona la versión del navegador
    let version = window.navigator.appVersion;

    console.log(version); //5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36

    //window.navigator.userAgent: regresa información acerca del agente de usuario enviada por el navegador al servidor 
    let agent = window.navigator.userAgent;

    console.log(agent); //Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36

    //window.navigator.language: Regresa el idioma en el cual el usuario tiene configurado su navegador
    let idioma = window.navigator.language;

    console.log(idioma);//es




