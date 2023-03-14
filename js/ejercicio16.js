// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadenaDeTexto = prompt("Proporcioneme una cadena de texto y se la enseñare al reves");

cadenaDeTexto = cadenaDeTexto.split("").reverse().join("");

document.write(`<h3>Su texto al reves es: ${cadenaDeTexto}</h3>`);