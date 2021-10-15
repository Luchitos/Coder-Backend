// Y obtenga la siguiente información de dicho array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

// Aclaración: todos los valores monetarios serán expresados con 2 decimales


const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
let productStatistics = productos.reduce((prev, obj, i)=> {
    if(i == 0){
        return {
            names: obj.nombre,
            total: obj.precio,
            minor: obj,
            major: obj
        }
    }else{
        let minor = prev.minor.precio < obj.precio ? prev.minor : obj;
        let major = prev.major.precio > obj.precio ? prev.major : obj;
            return {
                names: `${prev.names}, ${obj.nombre}`,
                total: prev.total + obj.precio,
                minor,
                major
            };
    }
    // return {total: prev.total + obj.precio};
}, {})
productStatistics.total = productStatistics.total.toFixed(2);
productStatistics.promedio = (productStatistics.total / productos.length).toFixed(2);
console.log(productStatistics);