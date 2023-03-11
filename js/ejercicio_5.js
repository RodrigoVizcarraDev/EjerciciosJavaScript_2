/*Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar». */

// PUNTOS A TENER EN CUENTA |
//---- El DNI posee 8 números ----
//---- El número estará en un rango entre 0 y 99999999 ----
//---- dniUsuario % 23 = 0 a 22 ----
//----  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ----
//---- (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) ----
//---- Si no ingresa un número mostrar un alert y volver a preguntarle su DNI ----
//---- Si el usuario pulsa cancelar en el confirm, entonces se sale del programa. ----
alert(`
Le pediremos su DNI y lo dividiremos por el número 23, el resto de esa división nos dará un número, 
según ese número le vamos a asignar una de las siguientes letras, teniendo en cuenta que la primera su valor
será 0 y ascendente hasta la última letra:
["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]`);

let confirmacioUsuario = true;
let resultadoDivisionDni = null;
let letraCorrespondiente = null;
const ListadoLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

while(confirmacioUsuario){

    confirmacioUsuario = confirm("Clik en 'Aceptar' para ingresar su DNI o 'Cancelar' para salir del programa");

    if(confirmacioUsuario === false){
        break;
    }else{

        const DNI_USUARIO = parseInt(prompt("Ingrese su DNI"));
        if(isNaN(DNI_USUARIO)){ // Condición por si ingresa algo que no es un número
            alert(`No es un número lo que usted ingresó`);
        }else if(DNI_USUARIO < 0 || DNI_USUARIO > 99999999){  // Condición para ver si el número esta en el rango de 0 y 99999999
            alert(`El número debe estar entre 0 y 99999999`);
        } else{
            resultadoDivisionDni = DNI_USUARIO % 23;
            letraCorrespondiente = ListadoLetras[resultadoDivisionDni];
            document.write(`La letra que a usted le corresponde es: ${letraCorrespondiente}`);
            confirmacioUsuario = confirm("Aceptar: poner otro DNI | Cancelar: Ver que letra me tocó");
        }

    }
    
}

