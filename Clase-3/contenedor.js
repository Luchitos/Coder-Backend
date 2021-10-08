const fs = require ('fs');

let id=1;
class Contenedor{
    constructor(archivo){
        this.archivo = archivo;        
    }

    save(title, price, autor){        
        this.archivo.push({id,title, price, autor});  
        id++
        return this.archivo.id;
        // POST '/api/productos       
    }  

    getById(id){
        // console.log(id)
    return this.archivo[id];
    // GET '/api/productos/:id'
    }

    getAll(){
        return this.archivo;
        // GET '/api/productos'
    }

    deleteById(id){
        let faux=this.archivo.findIndex((o)=>{
            return o.id==id
            
        })
        if(faux){
            this.archivo.splice(faux,1);
        }else{
            "no existe"
        }
        // DELETE '/api/productos/:id
}
}

const test = new Contenedor([]);

test.save("Escuadra", 123.45, "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png")
console.log("Probando metodo Save",test)

test.save("Calculadora", 3500, "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png")
console.log("Probando metodo Save",test)

test.save("Globo Terráqueo", 345.67, "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png")
console.log("Probando metodo Save",test)

let write = fs.promises.writeFile("./productos.txt", JSON.stringify(test.archivo), "utf-8");

write.then((res) => {
  try {
    console.log("Archivo creado");
  } catch {
    throw "Error al crear archivo";
  }
}).catch(err => {
    throw err
});

console.log("Mostrando archivo posicion 1",test.getById(1));
console.log("Mostrando contenido del archivo",test.getAll());

test.deleteById(2);
console.log("Borrando elemento 2",test)

// test.deleteAll();
console.log("Vaciar Archivo",test);

module.exports = Contenedor;








