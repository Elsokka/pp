var estudiante = ["Juan" , "Maria" , "Camilo", "Daniel"];

function saludar_estudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}


//Loop For
//tres pasos
// 1 Variable de control
// Hasta cuando se ejecuta el for teniendo en cuenta la variable control(Mientras)
// Que pasa cada vez que el for se ejecuta

for(var i = 0; i < estudiante.length; i = i + 1){
    saludar_estudiante(estudiante[i]);
}



//for of 

//Los arrays son en prural pero el parametro que le damos al for es el singular de un grupo 

var estudiante = ["Juan" , "Maria" , "Camilo", "Daniel"];

function saludar_estudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiant of estudiante){
    saludar_estudiante(estudiant);
}


//while

var estudiantes = ["Juan" , "Maria" , "Camilo", "Daniel"];

function saludar_estudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludar_estudiantes(estudiante);
}



//Playground

