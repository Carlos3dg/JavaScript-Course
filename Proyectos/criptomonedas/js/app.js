//Instance of API class
const api = new API();
//Instance of UI class
const ui = new UI();

//Create event listener to the form to get the select values
const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Get the coin selected from the form
    const selectCoin = document.getElementById('moneda');
    const selectedCoin = selectCoin.options[selectCoin.selectedIndex].value;
    //Get the cryptocoin selected from the form
    const selectCripto = document.getElementById('criptomoneda');
    const selectedCripto = selectCripto.options[selectCripto.selectedIndex].value;

    //Validate that all fields are completed
    if(selectedCoin !== '' && selectedCripto !== ''){
        console.log('ok');
    } else {
        //Call the ui instance to access to its methods
        ui.showMessage('Please select all the options in the form', 'alert bg-danger text-center') //Method to create a message
    }
});
