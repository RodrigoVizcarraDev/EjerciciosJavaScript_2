/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
/*
    Confirm al cancelar retorna false | al aceptar retorna true
    Prompt al cancelar retorna null 
*/

let confirmacion = true;
let cadenasDeTexto = "";
let contador = 0;

while(confirmacion){
    confirmacion = confirm("Click en 'aceptar' para enviar una cadena o click en 'cancelar' para salir ");
    console.log(confirmacion);

    if(confirmacion === false && contador === 0){
        document.write(`No hay cadenas de texto que mostrar`);
        break;
    }else if(confirmacion === false){
        document.write(`Las cadenas de texto son: <br> ${cadenasDeTexto}`);
        break;
    }
    contador++;

    const textoUsuario = prompt("Escriba una cadena de texto");
    
    cadenasDeTexto = cadenasDeTexto + " - " + textoUsuario;

}


