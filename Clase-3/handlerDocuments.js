// Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.

const fs = require('fs')

class Contenedor {
  constructor(name) {
    this._id = Contenedor.incrementId();
    this.name = name;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
  async readDocument(url){
    try {
      return await fs.promises.readFile(`${url}.txt`, 'utf-8');
    } catch (error) {
      console.log("readDocument",error);
    }
    
  }
  writeDocument(url,data){
    try {
      return await fs.promises.writeFile(`${url}.txt`, 'utf-8',data);
    } catch (error) {
      console.log("readDocument",error);
    }
  }
  save(Object) {

  }

  getById(number) {

  }
  getAll() {

  }
  deleById(number) {

  }
  deleteAll() {
    // unlink
  }

}