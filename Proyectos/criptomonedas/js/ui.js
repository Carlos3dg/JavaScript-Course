class UI {
    constructor() {
        this.designSelect(); //Call the method to be executed
    }

    //Method to build the select design 
    designSelect() {
        //Call the loadApi method isinde the API class to get the json data
        api.loadApi()
            .then(result => console.log(result));
    }

    //Method to show an error or successfull message
    showMessage(message, classes) {
        const divMessage = document.createElement('div');
        divMessage.className = classes;
        divMessage.appendChild(document.createTextNode(message));

        //Select the element where divMessage is gonna be inserted
        const messageContainer = document.querySelector('.mensajes');
        messageContainer.appendChild(divMessage);

        //Delete the message after three seconds
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

}