// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let confirmacion = true;
let sumaNumeros = 0;
let numeroUsuario;
let contador = 0;
while(confirmacion){

    confirmacion = confirm("Pulse aceptar para agregar un número o cancelar para salir");
    if(confirmacion === false && contador === 0){
        document.write(`Saliendo sin nada que mostrar`);
        break;
    }
    if(confirmacion === false){
        document.write(`La suma de los números que ingresó es: ${sumaNumeros}`);
        break;
    }
    
    numeroUsuario = parseInt(prompt("Ingrese el número a agregar"));
    sumaNumeros = sumaNumeros + numeroUsuario;
    if(isNaN(numeroUsuario)){
        alert("No es un número lo que ustes ingresó");
    }
    contador++;
}

