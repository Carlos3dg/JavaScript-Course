document.getElementById('txtBtn').addEventListener('click', uploadTxt);

function uploadTxt() {
    fetch('https://drive.google.com/open?id=1_dK7Y8D3ufFjOIXTUPJj5ld8q7fdmSxG')
        .then(function(response) {
            if(response.ok) {
                response.text().then(function(res) {
                    console.log(res);
                });
            } else {
                console.log('error en response ok.')
            }
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        })
}


/*function uploadTxt() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'datos.txt', true);

    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log(xhr.response);
        }
    }

    xhr.send();
}
*/
