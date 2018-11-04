//PROTOTYPES
/*Se utilizan para mantener mejor organizada la forma de declarar un objeto. 
Como se ha visto, un objeto se puede crear a base de una clase o constructor, es decir, una función haciendo uso de la palabra this para crear propiedades
al momento de hacer una clase se pueden crear metodos en esta, en ocasiones los metodos pueden ser muchos o muy largos, para esto se crean los prototypes 
para tener un mejor control y mejor organización*/
    //Sin prototypes
    function usuario(nombre, plan){
        this.nombre = nombre;
        this.plan = plan;
        this.saldo = function(){
            let saldo;

            if (this.plan = 'escencial'){
                saldo = 450;
            } else if (this.plan = 'premium'){
                saldo = 550;
            } else {
                saldo = 350;
            }

            return saldo
        }
    } //Clase: usuario

    const usuario1 = new usuario('Carlos', 'escencial');
    console.log(usuario1); //usuario {nombre: "Carlos", plan: "escencial", saldo: f} //Instancia de clase, tambien llamado objeto

    //Con prototypes
    function User(nombre, plan){
        this.nombre = nombre;
        this.plan = plan;
    } //Clase: User

    User.prototype.saldo = function(){
        let saldo;

        if (this.plan = 'escencial'){
            saldo = 450;
        } else if (this.plan = 'premium'){
            saldo = 550;
        } else {
            saldo = 350;
        }

        return saldo
    } //Este prototype indica solo estar disponible para los objetos de tipo User, lo cuál da dlexibilidad si se quiere crear un objeto similar a base del mismo constructor ya que estos objetos similares no tendrán esta función

    const user1 = new User('Carlos', 'escencial');
    console.log(user1); //User {nombre: "Carlos", plan: "escencial"} //Instancia de clase u objeto.
    //Como se puede observar, al imprimir el objeto User  no se visualiza el método o propiedad 'Saldo()' dentro del objeto, este a diferencia del objeto Usuario tiene su método disponible en la propiedad '_proto_:'

    console.log(user1.saldo());

    //Ejemplo de otro prototype con la información del usuario
    User.prototype.clienteInfo = function(){
        return `Cliente: ${this.nombre}, Plan: ${this.plan}, saldo:${this.saldo()}`
    }
    console.log(user1.clienteInfo());
     //la palabra this es el sustituto del nombre del objeto, en este caso 'user1', si el prototype lo tuvieramos declarado con el nombre del objeto en ves de la palabra this, entonces los valores de este prototype siempre arrojarían los valores del objeto 'user1'

    console.log(user1.clienteInfo());

    /*Nota. A los objetos creados a base de un constructor se les puede llamar instancias de clase*/

//HEREDAR PROTOTYPES Y CLASES A OTRO OBJETO
    //1. Creamos nuestra clase (padre):
    function Persona(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //1.1 Se crean los Prototypes que estan directamente conectados con la clase Persona
    Persona.prototype.personaInfo = function(){
        return `Nombre: ${this.nombre}, saldo: ${this.saldo}`
    }

    //2. Se crean las instancias de clase Persona:
    const personaFisica1 = new Persona('Carlos', 1500);

    /*Si se desea crear otra clase diferente pero que contenga algunas propiedades iguales a la clase Persona entonces:*/
    //3. Se crea una clase hija:
    function PersonaMoral(nombre, saldo, telefono, tipo){
        Persona.call(this, nombre, saldo); //Se heredan las propiedades de la clase Persona
        this.telefono = telefono; //Se crean propiedades propias
        this.tipo = tipo;
    }

    //Si quisieramos acceder al prototype creado para la clase Persona:
    //1. Con el objeto PersonaFisica1 se accede directamente
    console.log(personaFisica1.personaInfo());

    //2. Con las instancias de clase PersonaMoral es necesario heredar el prototype para poder llamarlo
    PersonaMoral.prototype = Object.create(Persona.prototype);

    //4. Ahora se crean las instancias de clase para PersonaMoral:
    const Uber = new PersonaMoral('Uber', 100000, '81562478', 'Transporte');

    //2.1 Ahora hacemos que el objeto Uber llame al prototype personaInfo
    console.log(Uber.personaInfo());

//OBJECT CREATE
//Es una función para crear objetos con prototypes incluidos

    //Creamos nuestra clase 
    const Cliente = {
        imprimirSaldo: function() {
            return `hola ${this.nombre}, tu saldo es ${this.saldo}`;
        },
        retirarSaldo: function(retiro) {
            return this.saldo -= retiro;
        }
    }
    /*Nota. Esta es una forma similar para crear clases, realmente se esta creando un objeto con propiedades mas no con valores, es como si se creara la pura platilla del objeto*/

    //Se crea el objeto con sus prototypes incluidos
    const mary = Object.create(Cliente);

    console.log(mary);//De momento nuestro objeto esta vacío

    mary.nombre = 'Mary';
    mary.saldo = 1000;

    console.log(mary);//Ahora nuestro objeto tiene sus propiedades y valores

    mary.retirarSaldo(300);
    console.log(mary.imprimirSaldo());
    //Y aqui tambien el objeto accede a los prototypes de Cliente.

