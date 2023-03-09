/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


*/

let edadUsuario = parseInt(prompt("Digame su edad"));

if(edadUsuario >= 10 && edadUsuario <= 100){

    if(edadUsuario >= 18 && edadUsuario <= 70){
        document.write(`Usted puede sacar su licencia para conducir`);
    } else {
        document.write(`Usted no puede sacar su liencia para conducir`);
    }

} else {

    document.write(`Ingrese un número entre 10 y 100 años por favor`);

}