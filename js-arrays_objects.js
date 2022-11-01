var articulos = [
    {nombre: "Bici", costo: 5},
    {nombre: "tv", costo: 30},
    {nombre: "libro", costo: 1},
    {nombre: "phone", costo: 15},
    {nombre: "pc", costo: 25},
    {nombre: "teclado", costo: 20},
    {nombre: "audifonos", costo: 8}
];

//Metodo filter: Ayuda a filtrar si algo es verdad o falso y lo mete en otro array

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 15;
});

//Metodo map: Mapear las propiedades y trae lo que buscamos
var articulosmapeado = articulos.map(function(articulo){
    return articulo.nombre;
});

//metodo Find: devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

var primerarticulo = articulos.find(function(articulo){
    return articulo.nombre === "libro"
});

//Metodo Foreach : No modifica el array actual, simplenete filtra sobre el original y regresa 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});