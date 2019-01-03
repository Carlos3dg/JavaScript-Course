//Get cargar button and add click eventlistener
document.getElementById('cargar').addEventListener('click', cargarDatos);

//Function to make every step to load content with AJAX
function cargarDatos() {
    // 1. Creation of the instance (XMLHttpRequest object)
    const xhr = new XMLHttpRequest();
    //Here we have created an object to access to every method offer by AJAX

    // 2. Open the connection
    xhr.open('GET', 'datos.txt', true);
    /*Here we open the connection with the request, it is only necessary to provide the type of connection to be executed, in this case GET (used to read files .txt or .json), other kind of connection is the POST method, used to send data to the database or extract data from it, other two methods are PUT, used to update data and DELETE, used to delete data. Besides the type of connection also it is necesary to provide the file name from where the request is going to extract the information and the true value to enable the asyncronous way.*/

    // 3. Determination of the process to onload it
    xhr.onload = function() {
        //There are some values to determine the request status
            // 200 : Succefully | 403 : Prohibited | 404 : Not found
        if(this.status === 200) {
            document.getElementById('listado').innerHTML = `
                <h1>${this.responseText}</h1>
            ` //this.responseText is the text inside our request file
        }
    }

    /*Other way to execute the step 3 is using the onreadystatechange method which one evaluate the state request like this:
        0 - Not initialized
        1 - Set connection
        2 - Received
        3 - Processing
        4 - Request ready

    So, this method looks like follow:

    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.getElementById('listado').innerHTML = `
                <h1>${this.responseText}</h1>
            `
        }
    }
    */

    // 4. Finally we just send the request
    xhr.send();
}