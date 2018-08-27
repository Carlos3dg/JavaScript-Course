//Creación de variables
//1.Creamos una variable que sea igual al  elemento donde iran dentro nuestros tweets
const tweets_container = document.getElementById('lista-tweets');


//Creación de EventsListeners
EventsListeners();

function EventsListeners() {
    //Creamos un evento para nuestro formulario el cuál hará una acción cada vez que el usuario presione un submit
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)
}


//Creación de Funciones
//1. Se delcara la función del evento submit (agregarTweet)
function agregarTweet(e){
    e.preventDefault();
    
    //Guardamos el tweet del usuario en una variable
    const tweet = document.getElementById('tweet').value;

    //Creamos un elemento el cual tendrá el tweet del usuario dentro.
    let li_tweets = document.createElement('li');

    li_tweets.textContent=tweet;

    //Creamos otro elemento el cual será un enlace para poder borrar los tweets:
    let borrarTweet = document.createElement('a');

    borrarTweet.classList='borrar-tweet';

    borrarTweet.innerText = 'X';

    //Seleccionamos el elemento donde va ir dentro nuestro elemento creado y ponemos appendchild.
    tweets_container.appendChild(li_tweets);
    li_tweets.appendChild(borrarTweet);
}