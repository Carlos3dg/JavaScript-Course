const api = new API();
const ui = new UI();

//EventListener in submit button
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    //Get input value 
    const inputText = document.getElementById('evento').value;
    //Get option value selected
    const select = document.getElementById('listado-categorias');
    const optionValue = select.options[select.selectedIndex].value;

    //Validate that all fields are filled
    if(inputText !== '') {
        api.loadEventSearch(inputText, optionValue)
            .then(result => {
                if(result.events.length > 0 ) {
                    ui.cleanPreviousSearch();
                    ui.addSearchResultsEvents(result.events);
                } else {
                    ui.cleanPreviousSearch();
                    ui.showMessage('Not found results', 'alert alert-danger mt-4');
                }

            });
    } else {
        ui.showMessage('Please complete all fields before submit', 'alert alert-danger mt-4');
    }
});