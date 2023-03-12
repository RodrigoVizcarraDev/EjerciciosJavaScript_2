// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 50"));

for(let i = 1; i <= numeroUsuario; i++){
    let piramide = "";

    for(let j = 1; j <= i; j++){
        piramide = piramide + j;
    }
    document.write(`<p>${piramide}</p>`);

}
