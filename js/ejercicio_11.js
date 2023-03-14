// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

const nombre_1 = prompt("Dime el primer nombre: ");
const edad_1 = parseInt(prompt("Dime la edad del primer nombre: "));

const nombre_2 = prompt("Dime el segundo nombre: ");
const edad_2 = parseInt(prompt("Dime la edad del segundo nombre: "));

const nombre_3 = prompt("Dime el tercer nombre: ");
const edad_3 = parseInt(prompt("Dime la edad del tercer nombre: "));

const edadDelMayor = Math.max(edad_1, edad_2, edad_3);

if(edadDelMayor === edad_1){
    document.write(`El nombre del mayor es: ${nombre_1}`);
} else if(edadDelMayor === edad_2){
    document.write(`El nombre del mayor es: ${nombre_2}`);
} else {
    document.write(`El nombre del mayor es: ${nombre_3}`);
}