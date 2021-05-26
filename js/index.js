const fraseSnake = "pepito_tiene_un_gato";
const fraseCamel = "manolitoTieneUnPerro";

console.log(snakeACamel(fraseSnake));
console.log(camelASnake(fraseCamel));

function snakeACamel(string) {

  let nuevaFraseCamel = "";
  const palabrasSeparadas = string.split("_");

  palabrasSeparadas.forEach((element, contador) => {
    if (contador === 0) {
      nuevaFraseCamel += element;
    }
    else {
      nuevaFraseCamel += firstLetterUpperCase(element);
    }
  })

  return nuevaFraseCamel;
}

function camelASnake(string) {

  return string.split('').map((character) => {
        if (character === character.toUpperCase()) {
            // eslint-disable-next-line prefer-template
            return '_' + character.toLowerCase();
        } else {
            return character;
        }
    })
    .join('');
}

function firstLetterUpperCase(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}
