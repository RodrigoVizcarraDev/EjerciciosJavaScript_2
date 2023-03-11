/*
Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma
1
22
333
4444
55555
666666
……. 
*/
/*
Cuando el bucle externo completa una iteración y comienza la siguiente, el valor de i se incrementa en 1 (i++) y el bucle interno se ejecuta nuevamente desde el principio. Esto significa que la variable j se inicializa nuevamente con un valor de 1 (let j = 1) en cada iteración del bucle externo.

*/

for(let contador = 1; contador <= 10; contador++){
    
    let impresion = "";
    for(let contador2 = 1; contador2 <= contador; contador2++){
        impresion = impresion + contador;
        
    }
    document.write(`${impresion} <br>`);
    
}
