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
        //Call loadDesireData() method with the selectedCoin and selectedCripto values as parameters
        api.loadDesireData(selectedCoin, selectedCripto)
        //Get the return value from the async function loadDesireData()
            .then(result => {
                //Call the quotationMessage method and pass it the result['RAM'] object as a parameter a the other two variables
                ui.quotationMessage(result['RAW'], selectedCoin, selectedCripto);
            }); 
    } else {
        //Call the ui instance to access to its methods
        ui.showMessage('Please select all the options in the form', 'alert bg-danger text-center') //Method to create a message
    }
});
