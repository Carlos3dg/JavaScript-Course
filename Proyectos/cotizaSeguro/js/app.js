//Global variables
const select = document.getElementById('anio');

// Class for cotizar seguro
function Seguro() {

}

// Class for UI
function UI() {

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
const form = document.getElementById('cotizar-seguro');
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
        console.log('Campos vacions');
    } else {
        console.log('Campos completos');
    }

});



