//JavaScript Scope
    //Lexical scoping: significa que cualquier variable que este definida de manera global esta disponible dentro del function scope y block scope, siempre y cuando esta este definida antes de la llamada a una función o antes del block
    const x = 2;

    function f(){
        console.log(x); //2
        console.log(y); //3
    }

    const y = 3;
    f();
    //En este ejemplo la variable y es definida antes de la llamada a la función por lo tanto esta se encuentra dentro del function scope sin importar que la función este declarada antes de la variable

    // 1. Global Scope: Cualquier variable declarada que este fuera de una función o de un block, estas variables estan disponibles 100% y si una función o un block las usa sus modificaciones pueden afectar a ese block o a esa función.
    let name = 'Irena'; //global
    let age = 25; //global

    function greet(){
        console.log(`Hello, ${name}!`);
    }

    function getBirthYear(){
        return new Date().getFullYear() - age;
    }
    //En este ejemplo greet y getBirthYear dependen 100% de las variables name y age, si estas son modificadas despues y posteriormente se realiza el llamado a las funciones el resultado puede ser diferente al que se espera.

    let user = {
        name: "Irena",
        age: 25
    };

    function greet1(){

        console.log(`Hello, ${user.name}!`);
    }

    function getBirthYear1(){
        return new Date().getFullYear() - user.age;
    }

    user.name = 'Carlos'
    user.age = 22

    greet1(); //Hello, Carlos
    console.log(getBirthYear1()); //1996
    //Se disminuye la dependencia a una sola variable en este caso user, sin embargo user puede ser modificada y afectar el resultado de las funciones

    function greet(user){
        user = {
            name: 'Ivan'
        }
        console.log(`Hello, ${user.name}!`);
    }

    function getBirthYear(user){
        user = {
            age: 20
        }
        return new Date().getFullYear() - user.age;
    }

    user.name = 'Carlos'
    user.age = 22

    greet(user); //Hello, Ivan
    console.log(getBirthYear(user)); //1998
    //Este ultimo ejemplo desaparece la dependencia que habia de la variable global y se crea una propia variable en cada función 

    //Block Scope
    {
        // outer block
        let x = { color: "blue" };
        let y = x; // y and x refer to the same object
        let z = 3;

        {
            // inner block
            let x = 5; // outer x now masked (se sobredeclara la variable y se modifica valor)
            console.log(x); // logs 5
            console.log(y.color); // logs "blue"; object pointed to by y (and x in the outer scope) is still in scope
            y.color = "red"; // outer y value has been modified (se modifica valor directamente)
            console.log(z); // logs 3; z has not been masked
        }

        console.log(x.color); // logs "red"; object modified in inner scope
        console.log(y.color); // logs "red"; x and y point to the same object
        console.log(z);

    }
    //En este ejemplo las variables x, y y z se declaran en el bloque general, despues se sobredeclara la variable x en un bloque dentro y su modificación no afecta la variable x del bloque general, por otra parte al modificar y como esta no se sobredeclara y solo se modifica, este valor es leído tambien por el bloque general, razón por la cual al final y.color es igual a 'red'

    //Mas ejemplos: global, función, bloque:
        //Global
        var a = 'a';
        let b = 'b';
        const c = 'c';

        //function scope
        function functionScope(){
            var a = 'A';
            let b = 'B';
            const c = 'C';
            console.log('FUNCION: ' + a,b,c) //A B C
        }
        functionScope();

        //Bloque
        if (true){
            var a = 'AA';
            let b = 'BB';
            const c = 'CC';
            console.log('BLOQUE: ' + a,b,c); //AA BB CC
        }

        console.log('GLOBALES: ' + a,b,c); //AA b c
    //Como se puede observar la variable a declarada con var puede ser alterada de forma general desde dentro del bloque aún cuando ésta se sobrescribe o sobredeclara lo cual no ocurre con las variables declaradas con let y const ya que estas siguen conservando su valor global.










