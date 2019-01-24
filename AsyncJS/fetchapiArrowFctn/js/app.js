//Upload a text file
document.getElementById('txtBtn').addEventListener('click', uploadTxt);

function uploadTxt() {
    fetch('datos.txt')
        .then(res => res.text())
        .then(data => document.getElementById('resultado').innerHTML = data)
        .catch(error => console.log(error));
}

//Upload a json file
document.getElementById('jsonBtn').addEventListener('click', uploadJson);

function uploadJson() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(empleado => html += `<li>${empleado.nombre} ${empleado.puesto}</li>`);

            document.getElementById('resultado').innerHTML = html;
        }).catch(error => console.log(error));
}

//Upload a RestAPI
document.getElementById('apiBTN').addEventListener('click', uploadRest);

function uploadRest() {
    fetch('http://picsum.photos/list')
        .then(res  => res.json()).
        then(result => {
            let html = '';
            result.forEach(imagen => {
                html += `
                    <li>
                        <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}
