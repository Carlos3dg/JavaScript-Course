//Switch en JavaScript
    //Programa el cual defina el aumento de un trabajador de acuerdo a su categoría 
    var cat, sueldoA, sueldoAnt;
    cat=1;
    sueldoA= 2500;

    switch(cat){
        case 1:
            sueldoAnt=sueldoA;
            sueldoA=sueldoA*1.15;
            break;
        case 2:
            sueldoAnt=sueldoA;
            sueldoA=sueldoA*1.10;
            break;
        case 3:
            sueldoAnt=sueldoA;
            sueldoA=sueldoA*1.08;
            break;
        case 4:
            sueldoAnt=sueldoA;
            sueldoA=sueldoA*1.07;
            break;
        default:
            console.log('Categoría inexistente, verifique nuevamente');
            break;
    }

    if (cat==1 || cat==2 || cat==3 || cat==4) {
        console.log(`categoría: ${cat} sueldo anterior: ${sueldoAnt} sueldo actual: ${sueldoA} `);
    }

//Iteraciones - For Loop
    //Imprimir los numeros del 0 al 9:
    for(let i = 0; i < 10; i++) {
        console.log(`Numero: ${i}`)
    }

    //IF dentro de un for: 
    for(var i=1; i<=10; i++){
        if (i === 5) {
            console.log(`${i} ◄ That´s my favorite num`)
        }

        console.log(i);
    }

    //IF dentro de un for:
    for(var i=1; i<=10; i++){
        if (i === 5) {
            console.log(`${i} ◄ That´s my favorite num`);
            continue;
        }
        
        console.log(i);
    }
    
    //Numeros pares e impares:
    for(let i=1; i<=10; i++){
        if(i % 2 == 0) {
            console.log(`Numero ${i} es Par`);
        } else {
            console.log(`Numero ${i} es impar`);
        }
    }

// Iteraciones While y Do While Loop
    //While:
    var i=0; //Declaramos la variable desde afuera del ciclo

    while (i <= 10) { 
        console.log(i);
        i++; //Hacemos el incremento dentro del ciclo
    }

    i = 1;

    while (i<=10) {
        if (i=== 5){
            console.log(`${i} ◄ This is my favorite num`);
            i++; //se coloca nuevamente el incremento para que no brinque el incremento de abajo, de lo contrario i siempre seria igual a 5 creando un loop finito
            continue; 
        }

        console.log(i);
        i++;
    }

    //Do While: a diferencia del while este corre el código al menos una vez independientemente si la condicion se cumple o no.
    i = 1; //valor inicial fuera del ciclo

    do {
        console.log(i);
        i++; //incremento dentro del ciclo
    } while (i <= 10); //condicion fuera del ciclo