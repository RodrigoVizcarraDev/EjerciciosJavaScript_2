//Realiza un script que pida un texto y lo muestre en mayúsculas.

const textoUsuario = prompt("Pon un texto para que lo muestre en mayusculas: ");
const textoMayusculas = textoUsuario.toUpperCase();

document.write(`<h2>El texto en mayusculas que pusiste es</h2>
                    ${textoMayusculas}`);