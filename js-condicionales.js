//Reglas para validar si es verdadero o falso

//If 

if (true) {
    console.log("Hola");
}

//else

if (false) {
    console.log("Hola");
} else  {
    console.log("Soy Falso");
}

// else if 

edad = 18;

if (edad === 20) {

    console.log("Puedes Votar");

} else if(edad > 18){
    
    console.log("Puedes votar");

} else  {
    console.log("No puedes votar");

}

//generar el condicional if and else al mismo tiempo

condition ? true : false;

var num = 1;

var result = num === 1 ? "Si soy un uno": "No soy uno";


//Reto de piedra papel o tijera con Javascript y Python

//Switch 

//Forma de validar condiciones pero por casos, si es verdad pasa una parte y si no es verdad genera otros casos

var num = 1;

switch(num){
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un diez!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");
}