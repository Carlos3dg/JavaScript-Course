//Variables
//Variable to storage the user budget
const userBudget = prompt('Ingresa el presupuesto semanal');
//Form
const form = document.getElementById('agregar-gasto');
//Spending container
const spendContainer = document.querySelector('.primario');
let budget;

//Classes
class Budget {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto)
    }

    //Method to subtract the budget
    availableBudget(cantidad) {
        return this.restante -= Number(cantidad);
    }
}

class UI {
    //Method to insert the budget value in HTML
    innerBudget(cantidad) {
        const budget = document.getElementById('total');
        const available = document.getElementById('restante');

        budget.innerHTML = `${cantidad}`;
        available.innerHTML = `${cantidad}`;
    }

    //Method to validate the form with a message
    formMessage(message, type) {
        //Creation of an element that will has the message
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');

        if(type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }
        //Insert the text message in our element
        divMessage.appendChild(document.createTextNode(message));
        //Insert our element in an specific location
        spendContainer.insertBefore(divMessage, form);
        //Delete our element from DOM after 3 seconds
        setTimeout(function() {
            divMessage.remove();
            form.reset();
        }, 3000)
    }
}

//Event Listeners
//Event listener that see if the user enter his budget or not
document.addEventListener('DOMContentLoaded', function(){
    if(userBudget === null || userBudget === '') {
        //If user not insert budget, then reload the page:
        window.location.reload();
    } else {
        //Instance of class that save the user budget
        budget = new Budget(userBudget);
        //Instance of class for the UI
        const ui = new UI();
        //Used of innerBudget method to insert values in HTML
        ui.innerBudget(budget.presupuesto);
    }
})

//Event Listener to validate the form
form.addEventListener('submit', function() {
    //Field values
    const nameSpend = document.getElementById('gasto').value;
    const valueSpend = document.getElementById('cantidad').value;
    //Instance of class for the UI
    const ui = new UI();

    if(nameSpend === '' || valueSpend === '') {
        //Used of formMessage method and asigning values for its parameters
        ui.formMessage('Error, completa los campos', 'error');
    } else {
        ui.formMessage('Envio exitoso', 'success');
    }
});