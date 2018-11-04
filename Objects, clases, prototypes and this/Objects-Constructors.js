//Objects Literals (Creación de objetos fácil o estandar)
    const cliente = {
        nombre: "Carlos", 
        saldo: 1000,
        tipo: function(){
            let tipo;

            if(cliente.saldo >= 1000){
                tipo = "Gold";
            } else if (cliente.saldo >= 500){
                tipo = "Platinum"
            } else {
                tipo = "Standard"
            }

            return tipo;
        }
    }

    console.log(cliente.tipo());

    /*Como se ha comentado en clases anteriores una función dentro de un objeto se le conoce como método. 
    En el método  'tipo' es necesario el uso de la propiedad saldo y para poder hacer uso de ella se 
    coloca el nombre del objeto (cliente) seguido de un punto, de esta forma se tiene acceso a todas las 
    propiedades dentro del objeto y asi podemos poner (despues del punto) la propiedad saldo para que sea leída
    correctamente. Sin embargo la palabra cliente se puede omitir y en en vez de ella usar this*/

/*---------------------------------------------------------------------------------------------------------*/

//this example:
    const cliente2 = {
        nombre: "Javier", 
        saldo: 800,
        tipo: function(){
            let tipo;

            if(this.saldo >= 1000){
                tipo = "Gold";
            } else if (this.saldo >= 500){
                tipo = "Platinum"
            } else {
                tipo = "Standard"
            }

            return tipo;
        }
    }

    console.log(cliente2.tipo());

    /*Aquí se tomo el uso de la palabra this para poder acceder a la propiedad saldo, similar a como se hizo en 
    el primer ejemplo. La palabra this accede a el padre de la propiedad, parametro o x función que querramos llamar
    para así poder tener acceso a ella, en este caso this accedió a el objeto cliente2 y así se pudo hacer uso de la propiedad saldo*/

//Método alternativo para crear objetos (Antes de EcmaScript 6)
    function Cliente(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    const persona1 = new Cliente('Juan', 1200); //Se crea un objeto con la estructura de la funcion Cliente y los valores juan y 1200 para los paramentros de esta
    console.log(persona1); /*
    Imprime:
        Cliente {nombre "Juan", saldo: 1200}
    Donde Cliente es el nombre de nuestro constructor(clase).*/

    /*En el método alternativo se usó una función con dos parametros, los cuales después se convierten en propiedades al hacer uso de
    la palabra this, cuando declaramos las propiedades la función pasa a ser constructor (clase, es decir, una base o plantilla para construir objetos) pero sigue conservando sus parametros, razón por la cual
    las propiedades declaradas dentro de ella se igualan a los parametros y así poder hacer uso de ellos cada vez que se cree un objeto*/

    //Método fácil (normal)
    const Client = {
        nombre: 'Juan',
        saldo: 1000
    }
    console.log(Client) /*
    imprime:
        :{nombre: "Juan", saldo: 1000}
    Donde Object() es el nombre de nuestro constructor*/

//Creando metodos(funciones) con el metodo alternativo para crear objetos
    function Alumno(nombre, promedio){
        this.nombre = nombre;
        this.promedio = promedio;
        this.status = function() { 
            let status;

            if (this.promedio >= 70){
                status = 'Aprobado'
            } else {
                status = 'Reprobado'
            }

            return status;
        }
    } //Constructor Alumno

    const a184907 = new Alumno('Carlos', 89); //Objeto 1
    const a186052 = new Alumno('Juan', 68); //Objeto 2

    console.log(a184907.status());//Aprobado
    console.log(a186052.status()); //Reprobado

    /* El uso del metodo alternativo es muy util cuando se crean un gran numero de obejtos que tienen las mismas propiedades pero diferentes valores, como se puede observar
    en el ejemplo se crearon dos obejtos (a184907 y a186052) unicamente escribiendo dos lineas */

//OTROS OBJETOS Y CONSTRUCTORES
    //String Objects
    const nombre1 = 'Carlos'; //type of string
    const nombre2 = new String('Javier'); //type of object

    console.log(nombre1); //Carlos
    console.log(nombre2); // String{"Javier"}

    //Number Objects
    const numero1 = 5;
    const numero2 = new Number(3);

    console.log(numero1);
    console.log(numero2);

    //Function objects
    const function1 = function(a, b){
        return a + b;
    } //type of function

    const function2 = new Function('a', 'b', 'return a + b'); //type of function

    console.log(function1(1, 3)); //4
    console.log(function2(1, 3)); //4

    //Cuando se usa la palabra new para declarar un string, number, boolean, array, etc., la variable es de tipo objeto
    //Esto puede ser util para crear prototypes dentro en strings, numbers, etc.