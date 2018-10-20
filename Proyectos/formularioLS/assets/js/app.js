//Creación de variables
//1.Creamos una variable que sea igual al  elemento donde iran dentro nuestros tweets
const tweets_container = document.getElementById('lista-tweets');


//Creación de EventsListeners
EventsListeners();

function EventsListeners() {
    //Creamos un evento para nuestro formulario el cuál hará una acción cada vez que el usuario presione un submit
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    //Creamos otro evento para el contenedor que tendrá la lista de nuestros tweets, esto creará un delagation en esa área
    tweets_container.addEventListener('click', borrarTweet);
    //Creamos un evento que cargue los tweets almacenados en LocalStorage cada vez que el documento(DOM) también se cargue
    document.addEventListener('DOMContentLoaded', getTweetsInDocumentRefresh);
}

//Creación de Funciones
//1. Se delcara la función del evento submit (agregarTweet)
function agregarTweet(e){
    e.preventDefault();
    
    //Guardamos el tweet del usuario en una variable
    let tweet = document.getElementById('tweet').value;

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

    //Llamar función que almacena los tweets a LocalStorage
    agregarTweetLocalStorage(tweet);
}

//Función que importará los tweets de LocalStorage al Documento
function getTweetsInDocumentRefresh(){
    let tweets;

    tweets = obtenerTweetsLocalStorage(); //Obtenemos tweets en forma de array
    //Aplicamos un forEach para crear los elementos li el numero de veces de los elementos del array de localStorage
    tweets.forEach(function(tweet){
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
    })
}

//2. Se declara la función del evento click - borrarTweet
function borrarTweet(e){
    e.preventDefault();
    
    //Realizamos una condición para realizar una acción se se le da click a la X 
    if (e.target.classList.contains('borrar-tweet')){
        //Se crea una variable que almacene el contenido dentro de la lista
        let tweet_content = e.target.parentElement.textContent;
        //Se borra la lista, ya que esta es el padre de 'borrar-tweet'
        e.target.parentElement.remove();
        //Se llama a la función que se encargará de buscar y borrar los tweets de LocalStorage
        BorrarTtweetLocalStorage(tweet_content); //Le pasamos el valor(string) que contiene la lista donde el usuaio da clic en X

        alert(`El tweet: ${tweet_content.substring(0, tweet_content.length - 1)} se eliminará`);
    }
}

//Se declará la función que almacenará los tweets a LocalStorage junto con un parametro, en este caso tweet, el cual tiene el valor de un tweet insertado por el usuario.
function agregarTweetLocalStorage(tweet) {
    let tweets;

    tweets = obtenerTweetsLocalStorage(); //Se recibe el array de el return de la función

    tweets.push(tweet); //Se agrega el tweet del usuario después del último elemento 

    // Declaramos SetItem para agregar a LocalStorage el array al que se le acaba de hacer push, sin embargo utilizamos el método JSON.stringify para transformar ese array a string. 
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Función donde se obtiene el estado actual de LocalStorage, se retorna un arreglo con contenido si ya se han ingresado tweets anteriormente o vacio si es la primea vez que se ingresan
function obtenerTweetsLocalStorage() {
    let local_tweet;
    //Condición para determinar si el local storage se encuentra vacío o con uno o más tweets 
    if(localStorage.getItem('tweets') == null){
        local_tweet = []; //De estar vacío nuestra variable la hacemos arreglo
    } else {
        local_tweet = JSON.parse(localStorage.getItem('tweets')); //Si no esta vacío, se transforman los datos dentro de local storage, los cuales siempre tienen que ser strings, a formato JSON.parse lo cual hace que estos datos sean un arreglo
    }

    return local_tweet; //Se retorna valor de esta función como array
}

//Función que Borra los tweets de Local Storage 
function BorrarTtweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    //Igualamos variable a el tweet sobre el usuario presiona X y le dejamos todos los caracteres menos el ultimo (la X)
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    //Se iguala la variable tweets a el arreglo que regresa la función, es decir, a lo que se encuentra en LocalStorge
    tweets = obtenerTweetsLocalStorage();
    //Se realiza un forEach para el arreglo que se creo en el paso anterior y así se compará que si el tweet borrado es igual al tweet que el forEach esta recorriendo entonces se prosigue con eliminar ese tweet del array(tweets)
    tweets.forEach(function(tweet, tweetIndice){
        if (tweetBorrar === tweet){
            tweets.splice(tweetIndice, 1); //Splice borra los elementos del array, el primer valor dice apartir de donde y el segundo dice hasta donde, en este caso solo ponemos 1 para solo borrar 1.
        }
    } );

    localStorage.setItem('tweets', JSON.stringify(tweets)); //Colocamos nuevamente todo en localStorage
}