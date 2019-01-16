//Storage the form element in a variable
const form = document.getElementById('generar-nombre');

//Add the event listener submit to read the values from the form
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //Get input data value
    //Origin select
    const nationality = document.getElementById('origen');
    const nationalityValue = nationality.options[nationality.selectedIndex].value;
    //Gender select
    const gender = document.getElementById('genero');
    const genderValue = gender.options[gender.selectedIndex].value;
    //Amount of names input
    const namesAmount = document.getElementById('numero');
    const namesAmountValue = namesAmount.value;

    //Concatenate the URL API according the input values
    let UrlApi = '';
    UrlApi += 'https://uinames.com/api/?';
    //Origin value
    if (nationalityValue !== '') {
        UrlApi += `region=${nationalityValue}&`;
    }
    //Gender value
    if (genderValue !== '') {
        UrlApi += `gender=${genderValue}&`;
    }
    //Amount value
    if (namesAmountValue !== '') {
        UrlApi += `amount=${namesAmountValue}`;
    }
/*
    //AJAX Process
    //Object creation
    const xhr = new XMLHttpRequest();

    //Open connection
    xhr.open('GET', UrlApi, true);

    //Onload request
    xhr.onload = function() {
        if (this.status === 200) {
            const names = JSON.parse(this.responseText);

            let htmlNames = '<h2>Llistado de Nombres</h2>';
            htmlNames += '<ul class="lista">';
            names.forEach(function(name){
                htmlNames += `<li>${name.name}</li>`
            });
            htmlNames += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNames;
        }
    }

    //Send request
    xhr.send();
*/

    //FETCH API PROCESS
    //Call function and direct request as an argument
    fetch(`${UrlApi}`)
        .then(function(res) {
            //Get our json file as a promise
            return res.json();
        }).then(function(names) {
            let html = '<h2>Listado de nombres</h2>';
            html += `<ul class="lista"`;
            names.forEach(function(name) {
                html += `<li>${name.name}</li>`;
            });
            html += '</ul>';
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
})