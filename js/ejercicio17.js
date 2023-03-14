// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let textoUsuario = prompt("Escriba un texto y le dire la primer vocal");
textoUsuario = textoUsuario.toLowerCase();
let noHayVocales = true;
for (let i = 0; i < textoUsuario.length; i++) {

    if(textoUsuario[i] === "a"){
        document.write("La primer vocal es la 'a'");
        noHayVocales = false;
        break;
    }else if(textoUsuario[i] === "e"){
        document.write("La primer vocal es la 'e'");
        noHayVocales = false;
        break;
    }else if(textoUsuario[i] === "i"){
        document.write("La primer vocal es la 'i'");
        noHayVocales = false;
        break;
    }else if(textoUsuario[i] === "o"){
        document.write("La primer vocal es la 'o'");
        noHayVocales = false;
        break;
    }else if(textoUsuario[i] === "u"){
        document.write("La primer vocal es la 'u'");
        noHayVocales = false;
        break;
    }

    
}

if(noHayVocales){
    document.write("<h3>No hay ninguna vocal en el texto</h3>")
}