//Ejemplos en los que Boolean devuelve Falso:

Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:

Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(true); //Verdadero

//Importante para cuando quereos validar sentencias y condicionar acciones

//Operadores

3 + 2; //suma

50 - 10; //resta

10 * 20 // Multiplicación

20 / 2 //División

"Diego " + "Ortega"; //concatenar

! // Significa negación

!false // True, estamos negando la operación

var a = 1; //Asginación

3 == "3" //True, Comparación, ya que compara el valor, no el tipo de valor

3 === "3" //Falso,Comparación, este valida que los dos, tanto tipo como valor sea igual

5 < 3; //Menor que 

5 > 3; //mayor que 

5 <= 6 //Menor o igual 

5 >= 6 //mayor o igual


a && b //Se valda si a y b es verdad, se cumple la condición, si no no se cumple

a || b // Si alguna de las dos es verdad, se cumple la condición

