
// Es un objeto

var miAuto = {};


 //Como lo generamos
var miAuto = {
    marca: "toyota",
    color: "rojo",
    modelo: "corolla",
    año: 1998

};

//Acceder a las propiedades el objeto
//Es como si llamaramos una variable dentro del objeto

miAuto.año // te trae 1998



//Tambien podemos generar que una de las propiedades sea una función, se les llama metodos

var miAuto = {
    marca: "toyota",
    color: "rojo",
    modelo: "corolla",
    año: 1998,
    detalleauto: function(){
        console.log(`El auto es ${this.modelo} y del año ${this.año}`)
    }

};

//El this es una variable que hace referencia al objeto, es decir a su padre. Para acceder a ciertos valores de mi objeto


//Como puedo replicarlos ? Para realizar nuevos objetos 
//Funcion contructora: generando un template del objeto, con sus propiedades y parametros, para luego crear nuevas instacias con un operador especial 

var miAuto = {
    marca: "toyota",
    color: "rojo",
    modelo: "corolla",
    año: 1998,
    detalleauto: function(){
        console.log(`El auto es ${this.modelo} y del año ${this.año}`)
    }

};

//funcion

function auto(marca, color, modelo, año){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.año = año;
}

var carro2 = new auto("Chvrole", "azul", "Model 3", 2022);

//Playground

export function solution(car) {
    if (car.licensePlate) {
      car.drivingLicense = true;
    } else {
      car.drivingLicense = false;
    }
    return car
  }

