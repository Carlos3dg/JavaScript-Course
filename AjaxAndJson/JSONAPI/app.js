const loadButton = document.querySelector('#cargar');

loadButton.addEventListener('click', function() {
    //Object creation
    const xhr = new XMLHttpRequest();

    //Open connection, here we write the direction to the Rest API
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    //Load request
    xhr.onload = function() {
        //Validate succesfull load
        if (this.status = 200) {
           const posts =  JSON.parse(this.responseText);

           let htmlElement = '';

           posts.forEach(function(post) {
               htmlElement += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
               `;
           });

           document.getElementById('listado').innerHTML = htmlElement;
        }
    }

    //Send request
    xhr.send();
})