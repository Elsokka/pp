var frutas = ["manzana", "peras", "bananas", "fresas"]; //Asi se crea un arrays

console.log(frutas[0]); //Para ingresar a un elemento

console.log(frutas.length); //Me dice la cantidad de elementos

//los arrays tiene metodos, son elementos que ayudan agenerar cosas con los arrys

//Agregar elemento

var frutas = ["manzana", "peras", "bananas", "fresas"];
var masfrutas = frutas.push("Uvas");

//Eliminar un elemento(El ultimo)

var frutas = ["manzana", "peras", "bananas", "fresas"];
var menosfrutas = frutas.pop();

//elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

var frutas = ["manzana", "peras", "bananas", "fresas"];
var iniciofruta = frutas.shift("Uvas");

//agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

var frutas = ["manzana", "peras", "bananas", "fresas"];
var borrafrutainicio = frutas.unshift("Uvas");


//Mutar o saber la posición del elemento del arrays

var frutas = ["manzana", "peras", "bananas", "fresas"];
var posicion = frutas.indexOf("bananas");
console.log(posicion)



//Codigo de playground de platzi

export function solution(arraySecreto) {
    var valor = arraySecreto[0];
    var tipo = typeof valor;

    if(tipo === "string"){
        return true;
    } else {
        return false;
    }

  }
