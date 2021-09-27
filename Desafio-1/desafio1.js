// 1) Declarar una clase Usuario

// 2) Hacer que Usuario cuente con los siguientes atributos:
// nombre: String
// apellido: String
// libros: Object[]
// mascotas: String[]

// 3) Hacer que Usuario cuente con los siguientes métodos:
// getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
// addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
// countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
// addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
// getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.


class Usuario {
    constructor ({nombre, apellido, libros, mascotas}){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return (this.nombre + this.apellido);
    }

    addMascota(newMascota){
        this.mascotas.push(newMascota) 
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(titulo,autor){
        this.libros.push({titulo,autor});
    }

    getBookNames(){
        return this.libros.map(X=> {
            return x.titulo;
        });
    }
}
let data = {
    nombre: "Lionel",
    apellido: "Messi",
    libros: [{titulo: 'Como ganar la Copa America',autor:'Lio Messi'},
    {titulo: 'Argentina Campeón de America 2021',autor:'La Scalonetta'},
    {titulo: 'Dios',autor:'Diego Armando Maradona'},]

}