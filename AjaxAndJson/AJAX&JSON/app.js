//AJAX AND JSON

//Program to onload one employment from empleado.json
const empleadoBtn = document.getElementById('boton1');

//Event Listener to onload data from empleado.json
empleadoBtn.addEventListener('click', function() {  
    // 1. Crete the XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // 2. Open the connection
    xhr.open('GET', 'empleado.json', true);

    // 3. Onload Request
    xhr.onload = function() {
        if(this.status === 200) {
            const empleado = JSON.parse(this.responseText);

            const htmlEmpleado = `
                <ul>
                    <li>ID: ${empleado.id}</li>
                    <li>Nombre: ${empleado.nombre}</li>
                    <li>Empresa: ${empleado.empresa}</li>
                    <li>Trabajo: ${empleado.trabajo}</li>
                </ul>
            `;

            document.getElementById('empleado').innerHTML = htmlEmpleado;
        }
    }

    // 4. Send request
    xhr.send();
})