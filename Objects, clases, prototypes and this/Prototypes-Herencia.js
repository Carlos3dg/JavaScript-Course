//PROTOTYPES
/*Se utilizan para mantener mejor organizada la forma de declarar un objeto. 
Como se ha visto, un objeto se puede crear a base de un constructor, es decir, una función haciendo uso de la palabra this para crear propiedades
al momento de hacer un constructo se pueden crear metodos en este, en ocasiones los metodos pueden ser muchos o muy largos, para esto se crean los prototypes 
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
    }

    const usuario1 = new usuario('Carlos', 'escencial');
    console.log(usuario1); //usuario {nombre: "Carlos", plan: "escencial", saldo: f} 

    //Con prototypes
    function User(nombre, plan){
        this.nombre = nombre;
        this.plan = plan;
    }

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
    }

    const user1 = new User('Carlos', 'escencial');
    console.log(user1); //User {nombre: "Carlos", plan: "escencial"} 

    

