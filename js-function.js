//Declarativas

function mifuncion(){
    return 3;
};

mifuncion();



//Funciones Expresivas, xpresión 
// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
// Declarando una variable que contiene una funcion 

var mifuncion = function(a,b){ 
    return a + b;
};                  //   Funcion anonima

// Como llamar una funcion 

mifuncion();


//Funciones con parametros

function saludar_estudiante(estudiante){
    console.log(estudiante);
};

saludar_estudiante("Diego");

//