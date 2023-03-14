// Realiza un script que cuente el número de vocales que tiene un texto.

let textoUsuario = prompt("Ingrese un texto y le diré cuantas vocales tiene");
textoUsuario.toLowerCase();
let contadorVocales = 0;
for(let i = 0; i < textoUsuario.length; i++){

    switch(textoUsuario[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            contadorVocales++;
            break;
    }
}

document.write(`<p>Las vocales que hay en tu texto son: ${contadorVocales}</p>`);