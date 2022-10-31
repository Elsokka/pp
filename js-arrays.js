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

//Agregar a un valor al arrys al inicio del arrays

var frutas = ["manzana", "peras", "bananas", "fresas"];
var iniciofruta = frutas.unshift("Uvas");

//Eliminar elemento en el inicio 

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
