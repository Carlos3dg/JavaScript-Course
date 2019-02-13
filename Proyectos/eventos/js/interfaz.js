class UI {
    constructor() {
        this.init()
        this.resultContainer = document.getElementById('resultado-eventos');
    }
    //Method to be executed when the app is initiating
    init() {
        this.eventDesignResult();
    }
    //Method to design the event result search according with the input data
    eventDesignResult() {
        const eventObject = api.loadEventRequest()
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
}