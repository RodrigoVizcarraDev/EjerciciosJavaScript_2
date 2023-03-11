/*Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numeroIndicado = parseInt(prompt("Indique un número del 1 al 50"));
const numeroLimite = 50;

if( (!isNaN(numeroIndicado)) && (numeroIndicado >= 1 && numeroIndicado <= 50) ){
    
    for(let i = numeroIndicado; i >= 1; i--){
        let numerosMostrar = "";

        for(let j = 1; j <= i; j++){
            numerosMostrar = numerosMostrar + i;
        }
        console.log(numerosMostrar);
    }
}else{
    console.log("El número establecido no está entre 1 y 50");
}