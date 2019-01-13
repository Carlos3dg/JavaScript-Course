//Promise
//Resolve status
const esperando = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve('Successfull request');
    }, 3000);
});

console.log(esperando); //Promise before set status: Pending.
esperando.then(function(message) {
    console.log(esperando); //Promise after listen for resolve: Resolved
    console.log(message); //Successfull request
});

//Resolve and reject status
const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('Descuento invalido');
    }
});

aplicarDescuento.then(function(result) {
    console.log(result); //Descuento aplicado
}).catch(function(result) {
    console.log(result); //Descuento invalido
})

/* Here the final result is 'Descuento invalido' due to the variable descuento is false */