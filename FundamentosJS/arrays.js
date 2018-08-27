//Arreglos en JavaScript y sus métodos

//Formas de crear un arreglo 
    const numeros=[1,2,3,4,5];
    console.log(numeros);

    let meses=new Array('Enero', 'Febrero', 'Marzo');
    console.log(meses);

//Métodos de un arreglo
    console.log(meses.length); //tamaño del arreglo
    console.log(Array.isArray(meses)); //Regresa un booleano preguntando si meses es un arreglo

    console.log(meses[2]); //Imprime un arreglo en especifico

    meses[3]='Abril'; //Agrega otro elemento al arreglo
    meses.push('Mayo'); //Agrega otro elemento al arreglo sin saber la posicion que sigue para ubicarlo.
    meses.unshift('Diciembre'); //Agrega otro elemento al arreglo antes de la primera posición y no después.

    console.log(meses);

//Buscar un elemento en el arreglo
    console.log(meses.indexOf('Abril'));
    let cumple; //Regresa la posición 3 que es en la cual se encuentra Abril.

    console.log(`8 de ${meses[5]} de 1996`); //Mi fecha de cumpleaños

//Eliminar un elemento en un arreglo
    meses.pop(); //Elimina el ultimo elemento de un arreglo
    console.log(meses);

    meses.shift(); //Elimina el primer elemento de un arreglo
    console.log(meses);

    meses.splice(2,2); /*Permite eliminar elementos en cualquier posición declarando un rango donde el primer numero es la 
    posicion que se quiere   eliminar y el segundo es la cantidad de elementos que se quieren eliminar apartir de esa posición*/
    console.log(meses);

//Cambiar o revertir el orden del arreglo
    meses.reverse(); //Ordena el arreglo de ultimo a primero
    console.log(meses);

//Combinar dos arreglos
    let nombresM=['Carlos', 'Luis', 'Edson', 'Miguel'],
        nombresF=['Karen', 'Jessica', 'Evelyn', 'Julissa'];

    nombresM.concat(nombresF);
    console.log(nombresM.concat(nombresF));

//Ordenar un arreglo
    nombresF.sort(); //Organiza un arreglo en orden alfabetico
    console.log(nombresF);

    //Ordenar un arreglo con numeros 
    let numbers=[3,34,5,45,10,2,46];

    numbers.sort(); //El orden que generea es: 10, 2, 3, 34, 45... Se orbserva que ordena los numeros no de menor a mayor si no de acuerdo a su primer digito de menor a mayor.
    console.log(numbers);

    numbers.sort(function(x, y) {
        return x - y;
    });         //Se utiliza una función para ordenar los numeros de manera correcta
    console.log(numbers);

//La variable const en objetos y arreglos
    const serie=[3,6,9,12];

    /* Esta acción es denegada o imposible:
    serie=[2,4,6,8];
    */

    // Pero individualmente si es posible cambiar un valor:
    serie[1]=4;
    serie.push(15);
    serie.unshift(0);
    console.log(serie);






