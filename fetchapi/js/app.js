document.getElementById('txtBtn').addEventListener('click', cargarTXT);

function cargarTXT() {
    fetch('datos.txt')
        .then(function(res) {
            console.log(res);
        })
}

const prom = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve();
    }, 3000)
    
})
console.log(prom);
prom.then(function() {
    console.log(prom)
});