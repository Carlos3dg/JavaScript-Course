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
    budgetSubtract(cantidad) {
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

    //Method to add every spend item and its cost in a list
    userSpendList(nameSpend, valueSpend) {
        //Select the ul container of the list
        const listContainer = document.querySelector('#gastos ul');
        //Creation of the list that will have the spendName and value
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertion of our values in our list
        listItem.innerHTML = `
            ${nameSpend}
            <span class="badge badge-primary badge-pill">$ ${valueSpend}</span90090>
        `;
        //Insertion of our element in DOM
        listContainer.appendChild(listItem);
    }

    //Method to insert the available budget due to the budgetSubtract method from Budget class
    availableBudget(spendValue) {
        //Container where the available budget will be set
        const availableBudget = document.getElementById('restante');
        //Variable that storage the return value from budgetSubtract method 
        let updatedBudget = budget.budgetSubtract(spendValue);
        //Insertion of the updatedBudget in DOM
        availableBudget.innerHTML = `${updatedBudget}`;
        //Call the budget method from this class
        this.budgetStatus(updatedBudget);
    }
    //Method to change the background color from the remaining budget containner
    budgetStatus(updatedBudget) {
        const initialBudget = budget.presupuesto;
        const budgetRemaining = updatedBudget;
        //Budget remaining container
        const budgetStatus = document.querySelector('.restante');

        if(budgetRemaining <= (initialBudget * 0.25)) {
            budgetStatus.classList.remove('alert-success', 'alert-warning');
            budgetStatus.classList.add('alert-danger')
        } else if(budgetRemaining <= (initialBudget * 0.50)) {
            budgetStatus.classList.remove('alert-success');
            budgetStatus.classList.add('alert-warning');
        }
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
        ui.userSpendList(nameSpend, valueSpend);
        ui.availableBudget(valueSpend);
    }
});