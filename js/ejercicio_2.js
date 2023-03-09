/* 
2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

 0-2: Muy deficiente
 3-4: Insuficiente
 5-6: Suficiente
 7: Bien
 8-9: Notable
 10: Sobresaliente
*/

const notaUsuario = parseInt(prompt("Ingrese la nota que obtuvo en el examen"));

switch(notaUsuario){
    case 0:
    case 1:
    case 2:
        document.write(`Muy deficiente`);
        break;
    
    case 3:
    case 4:
        document.write(`Insuficiente`);
        break;
    
    case 5:
    case 6:
        document.write(`Suficiente`);
        break;
    
    case 7:
        document.write(`Bien`);
        break;
    
    case 8:
    case 9:
        document.write(`Notable`);
        break;
    case 10:
        document.write(`Sobresaliente`);
    default:
        document.write(`Ingrese un número entre 0 y 10`);
}