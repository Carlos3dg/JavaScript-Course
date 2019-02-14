class UI {
    constructor() {
        this.init()
        this.resultContainer = document.getElementById('resultado-eventos');
    }
    //Method to be executed when the app is initializing
    init() {
        this.designOptionElements();
    }
    //Method to design the options elements
    designOptionElements() {
        api.loadEventRequest()
            .then(result => {
                //Get categories as objects in an array
                const categories = result.categories;
                //Get select element
                const select = document.getElementById('listado-categorias');
                //Create every option inside select element with the respective categories
                categories.forEach((categorie) => {
                    const option = document.createElement('option');
                    option.value = categorie.id;
                    option.appendChild(document.createTextNode(categorie.name));
                    select.appendChild(option);
                });

            });
    }
    //Method to add the search reasult events
    addSearchResultsEvents(events){
        //Go to every event result to add in DOM
        events.forEach(event => {
            this.resultContainer.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                            <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${event.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${event.description.text.substring(0, 230)}...</p>

                                <span class="badge bad-primary">Capacidad: ${event.capacity}</span>
                                <span class="badge badge-secondary">Fecha y hora: ${event.start.local}</span>
                                <a href="${event.url}" class="btn btn-primary btn-block mt-4" target="_blank">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
    }
    //Method to clean the previous search 
    cleanPreviousSearch() {
        this.resultContainer.innerHTML = '';
    }
    //Method to show a message after submit
    showMessage(message, classes) {
        const divMessage = document.createElement('div');
        divMessage.classList = classes;
        divMessage.appendChild(document.createTextNode(message));
        const divFather = document.getElementById('buscador');
        divFather.appendChild(divMessage);
        //Remove message after 3 seconds
        setTimeout(() => {
            this.removeMessage();
        }, 3000);
    }
    //Method to remove message 
    removeMessage() {
        const divMessage = document.querySelector('.alert');
        if(divMessage) {
            divMessage.remove();
        }
    }
}