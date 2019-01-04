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

//Program to onload employments from empleados.json
const empleadosBtn = document.getElementById('boton2');

//Event litener to onload data from empleados.json
empleadosBtn.addEventListener('click', function() {
    // 1. Creation of the XMLHttp object
    const xhr = new XMLHttpRequest();

    // 2. Open the connection
    xhr.open('GET', 'empleados.json', true);

    // 3. Onload the request
    xhr.onload = function() {
        // Evalution if the onload is succesfully
        if (xhr.status===200) {
            const empleados = JSON.parse(this.responseText);

            let htmlEmpleados = "";

            empleados.forEach(function(empleado){
                htmlEmpleados += `
                    <ul>
                        <li>ID: ${empleado.id}</li>
                        <li>Nombre: ${empleado.nombre}</li>
                        <li>Empresa: ${empleado.empresa}</li>
                        <li>Trabajo: ${empleado.trabajo}</li>
                    </ul>
                `;
            });

           document.getElementById('empleados').innerHTML = htmlEmpleados;
        }
    }

    // 4. Send Request
    xhr.send()
})