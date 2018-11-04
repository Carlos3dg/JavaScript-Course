//Classes en ECMAScript 6
//Con ECMAScript 6 las classes se crean con la palabra class y los constructores se declaran con la palabra constructor dentro de la clase
    class Cliente {
        constructor(nombre, saldo) {
            this.nombre = nombre;
            this.saldo = saldo;
        } //A esta parte de constructores se le define como atributos o propiedades.

        //Y a las funciones dentro se les conoce como métodos:
        imprimirSaldo() {
            return `Hola ${this.nombre}, tu saldo es: ${this.saldo}`;
        }

        tipoCliente() {
            let tipo;
            if (this.saldo > 2000){
                tipo = 'Gold';
            } else if (this.saldo > 100){
                tipo = 'Platinum';
            } else {
                tipo = 'Normal'
            }
            return tipo;
        }

        retiro(retiro) {
            return this.saldo -= retiro;
        }

        //Tambien es posible crear métodos estaticos (aquellos que no ocupan instanciarse para ser llamados)
        static bienvenida() {
            return `Bienvenida al cajero`;
        } //Podriamos decir que son aquellos que arrojan un valor predeterminado o estatico
    }

    const juan = new Cliente('Juan', 'Obregón', 3000);
    console.log(juan);
    juan.retiro(459);
    console.log(juan.imprimirSaldo()); //Hola Juan, tu saldo es: 2541

    //Llamamos a nuestro método estatico:
    console.log(Cliente.bienvenida());

    /*Nota. Si quisieramos hacer uso del método estatico desde nuestra instancia, algo similar a esto:
        juan.bienvenida();
    La consola nos marcaría error, debido a que no es una función como tal y por lo tanto no es una propiedad para esta instancia como lo son imprimirSaldo o tipoCliente*/

//HERENCIA EN CLASSES(ECMAScript 6)
//Para que una clase hija herede de una clase padre sus atributos y métodos, es necesario usar la palabra extends
    class Empresa extends Cliente {
        constructor(nombre, saldo, telefono, tipo) {
            //Ahora, para acceder al constructor de la clase padre se hace uso de la palabra super()
            super(nombre, saldo); //Con super se tiene acceso a todos los atributos de la clase
            this.telefono = telefono;
            this.tipo = tipo;
        }

        //Con lo anterior se heredan tanto atributos y métodos, en caso de querer configurar un metodo, este tendrá que ser sobreescrito:
        static bienvenida() {
            return `Bienvenida al cajero Soriana`;
        } 
    }

    const soriana = new Empresa('Soriana', 10000, 859745, 'Supermecado');

    console.log(soriana); //Empresa {nombre: "Soriana", saldo: 10000, telefono: 859745, tipo: "Supermercado"}

    //Dentro de la instancia soriana tambien se pueden llamar a las funciones o metodos de la clase cliente
    console.log(soriana.imprimirSaldo()); //Hola Soriana, tu saldo es: 10000

    //Llamamos al método que se sobreescribio:
    console.log(Empresa.bienvenida()); //Bienvenida al cajero Soriana.