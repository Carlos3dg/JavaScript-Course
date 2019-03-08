var matricula=document.getElementById('id_maestro').value,
    contraseña=document.getElementById('contraseña');

let maestro = {
    Nombre: 'Miguel Díaz Hernández',
    Matricula: 184907,
    Facultad: 'Facultad de Ingeniería y Sistemas'
}

if (maestro.Matricula==matricula) {
    document.getElementById('maestro').innerHTML = maestro.Nombre;
    document.getElementById('matricula').innerHTML = maestro.Matricula;
    document.getElementById('facultad').innerHTML = maestro.Facultad;
}



