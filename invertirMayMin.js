let palabra = "Ada Lovelace"
let invertir = []

// utilizamos el split para separar la cadena de texto palabra por palabra 
let caracter = palabra.split('');

for (let i = 0; i < caracter.length; i++) {
    // agregamos con el psuh cada palabra que separamos a la array
    invertir.push(caracter[i])

    if (caracter[i] === caracter[i].toUpperCase()) {
        invertir[i] = caracter[i].toLowerCase();
      } else if (caracter[i] === caracter[i].toLowerCase()) {
        invertir[i] = caracter[i].toUpperCase();
      }
}

// join me convierte el array en una cadena de texto
console.log(invertir.join(''));



