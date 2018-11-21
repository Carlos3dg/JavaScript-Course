//Global variables
const select = document.getElementById('anio');
const form = document.getElementById('cotizar-seguro');

// Class for cotizar seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Prototype to calculate the Insurance
Seguro.prototype.cotizarSeguro = function() {
    //Base price
    const precioBase = 2000;
    let cantidad; //The variable to store the final price 

    /*
        1 = americano -- 1.15;
        2 = asiatico -- 1.05;
        3 = europeo -- 1.35;
    */
   //Detemine the type of marca
    switch(this.marca) {
        case '1':
            cantidad = precioBase * 1.15;
            break;
        case '2':
            cantidad = precioBase * 1.05;
            break;
        case '3':
            cantidad = precioBase * 1.35;
            break;
    }
    
    //Calculate the price according to the year
    /*
        Every year in the past according to the present year is 3% less over the price in the present
    */
   const diferencia = new Date().getFullYear() - this.anio;
   cantidad -= (cantidad * (diferencia * 0.03));

   //Calculate the price according to the insurance type
   /*
        If insurance is basic the price increase 30% more;
        If insurance is full the price increase 50% more;
   */
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

// Class for UI
function UI() {

}

//Prototype used to show a message when the form is submited
UI.prototype.showMessage = function (mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }

    div.innerHTML = mensaje;
    form.insertBefore(div, document.querySelector('.form-group'));
   
    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000)
}

//Create <option> tags in <select>
const max = new Date().getFullYear();
const min = max - 20;

for(let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    select.appendChild(option);
}

//Event Listeners
//Submit event in form:
form.addEventListener('submit', function(e){
    e.preventDefault();
    //Get marca: Americano, Asiatico, Europeo..
    const marca = document.getElementById('marca');
    const marcaValue = marca.options[marca.selectedIndex].value;

    //Get anio
    const anioValue = select.options[select.selectedIndex].value;

    //Get Type insurance
    const typeInsurance = document.querySelector('input[name="tipo"]:checked').value;

    //Create and instance of UI
    const interfaz = new UI();
    //Validate that all fields are completed
    if(marcaValue === '' || anioValue === '' || typeInsurance === ''){
        interfaz.showMessage('Error, faltan datos por completar, favor de volver a intentar', 'error');
    } else {
        const seguro = new Seguro(marcaValue, anioValue, typeInsurance);

        const cantidad = seguro.cotizarSeguro()
    }
    
});



