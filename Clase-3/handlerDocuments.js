// Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.

const fs = require('fs');

let id = 1;
class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
        this.codif = 'utf-8'
    }

    async save(objecto) {
        const data = await this.leer()
        objecto.id = data.length + 1;
        data.push(objecto)
        try {
            await this.fs.promises.writeFile(this.archivo, JSON.stringify(data, null, "\t"));

        } catch (error) {
            console.log('el archivo no se pudo guardar', error)
        }

    }
    async leer() {
        try {
            let data = await this.fs.promises.readFile(`./${this.archivo}`, this.codif)
            return JSON.parse(data)
        } catch {
            console.log("archivo vacio")
            return []
        }
    }
    getById(id) {
        // console.log(id)
        return this.archivo[id];
        // GET '/api/productos/:id'
    }

    async getAll() {
        try {
            let data = await this.fs.promises.readFile(`./${this.file}`, this.codif)
            return JSON.parse(data)
        } catch {
            console.log("archivo vacio")
            return []
        }
    }

    deleteById(id) {
        let faux = this.archivo.findIndex((o) => {
            return o.id == id

        })
        if (faux) {
            this.archivo.splice(faux, 1);
        } else {
            "no existe"
        }
        // DELETE '/api/productos/:id
    }
    async deleteAll() {
        try {
            await this.fs.promises.unlink(`./${this.archivo}`)
        } catch (error) {
            console.log("no se pudo borrar el archivo", error)
        }
    }
}