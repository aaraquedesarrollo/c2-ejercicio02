const fraseSnake = "pepito_tiene_un_gato";
const fraseCamel = "fraseEnCamelcase";

console.log(snakeACamel(fraseSnake));
console.log(camelASnake(fraseCamel));

function snakeACamel() {

  let nuevaFraseCamel = "";
  const palabrasSeparadas = fraseSnake.split("_");

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

function camelASnake() {
  return "";
}

function firstLetterUpperCase(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}
