// A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
// B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

let hasta = 2000;
let response = {};

for (let index = 0; index < hasta; index++) {
    let num_random = Math.floor((Math.random() * (20 - 0) + 0));
    response[num_random] = response.hasOwnProperty(num_random) ? response[num_random] + 1 : 0;
    
    
}
console.log("Mi respuesta",  response);