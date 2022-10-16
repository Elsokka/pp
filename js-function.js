//Declarativas

function mifuncion(){
    return 3;
}

mifuncion();

//Expresión 

// Declarando una variable que contiene una funcion 

var mifuncion = function(a,b){ 
    return a + b;
}                  //   Funcion anonima

// Como llamar una funcion 

mifuncion();


//Funciones con parametros

function saludar_estudiante(estudiante){
    console.log(´Hola ${estudiante}´);
}

saludar_estudiante("Diego");

//