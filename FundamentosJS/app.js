//variables con var
var nombre='carlos', apellidos='juan';

console.log(nombre);
console.log(apellidos);


//variables con let
let usuario='carlos3dg'
usuario='CarlosDeveloper';
console.log(usuario);

// variables con const
const grupo='LSCA9';

console.log(grupo);

//concatenar en JavaScript
nombre='Juan Carlos'
apellidos='Obregón Ortiz'

console.log(nombre + ' ' + apellidos);
console.log(`${nombre} ${apellidos}`);

var avenger='Captain America', movie='civil war';

console.log(avenger + ' ' + movie);
console.log(`${avenger} ${movie}`);

document.getElementById('app').innerHTML=nombre + ' ' + apellidos;

document.getElementById('app').innerHTML=`${nombre} ${apellidos}`;

console.log(apellidos.length);

//métodos string de JavaScript
let mensaje='Being Developer';

console.log(mensaje.concat(' ' + 'is awesome!'));
console.log(mensaje.concat(' ' + 'is learning constantly'));
console.log(mensaje.concat(' ' + 'is being able to make real what\'s on your mind'));

console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase());
console.log(mensaje.length);

console.log(mensaje.substring(0,8));
console.log(mensaje.slice(-7));
console.log(mensaje.split(' '));
console.log(mensaje.replace('Being', 'I am a'));
console.log(mensaje.includes('Developer'));
console.log(mensaje.includes('Designer'));
console.log(mensaje.repeat(15));

mensaje= 'Changing the world'

console.log(mensaje.substring(0, 13));
console.log(mensaje.slice(-13));
console.log(mensaje.split(' '));
console.log(mensaje.replace('Changing', 'Programming'));




