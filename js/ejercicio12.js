// Realiza un script que genere un número aleatorio entre 1 y 99

// Ejercicios con String


let confirmacion = confirm(`
    Presione "ACEPTAR" para generar un número aleatorio entre 1 y 99.
    Presione "Cancelar" para salir del programa.
`)

if(confirmacion){
    let numeroRandom = Math.floor(Math.random() * 99) + 1;
    document.write(`El número random entre 1 y 99 es: ${numeroRandom}`);
}else{
    document.write("Saliendo del programa");
}
