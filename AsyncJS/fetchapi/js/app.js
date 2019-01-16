//Upload a text file
document.getElementById('txtBtn').addEventListener('click', uploadTxt);

function uploadTxt() {
    fetch('datos.txt')
        .then(function(res) {
            return res.text()
        })
        .then(function(data) {
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error);
        });
}

//Upload a json file
document.getElementById('jsonBtn').addEventListener('click', uploadJson);

function uploadJson() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            let html = '';
            data.forEach(function(empleado) {
                html += `<li>${empleado.nombre} ${empleado.puesto}</li>`;
            });

            document.getElementById('resultado').innerHTML = html;
        }).catch(function(error) {
            console.log(error);
        });
}

//Upload a RestAPI
document.getElementById('apiBTN').addEventListener('click', uploadRest);

function uploadRest() {
    fetch('http://picsum.photos/list')
        .then(function(res) {
            return res.json();
        }).then(function(result) {
            let html = '';
            result.forEach(function(imagen) {
                html += `
                    <li>
                        <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
}
