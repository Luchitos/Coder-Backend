class Cliente {
    static clientes = [];
    constructor (nombre,cantArticulos){
        this.nombre = nombre;
        this.cantArticulos = cantArticulos;
        this.atendido = false;
        Cliente.clientes.push(this)
    }

    atender()
    {
        return this.atendido=true
    }
    static getClientes(){
        return Cliente.clientes;
    }
}

const cliente1 = new Cliente("Juan Carlos", 10);
const cliente2 = new Cliente("Juan Pedro", 2);
cliente2.atender();
const  cliente3 = new Cliente("Jose", 7);
cliente3.atender();

console.log(Cliente.getClientes())


// #2 Cronometro
class Chorometer{
     constructor(func){
         this.func = func;
         this.intervalId = 0;
     }
     execute(){
        //  this.func(arguments);
         this.func(... Object.values(arguments));
         //this.func(Object.values(arguments))
     }
     start(){
         console.log("Inciando contador");
         this.intervalId = (setInterval(this.func,1000));
     }
     stop(){
         clearInterval(this.intervalId);
     }

}
let contador = 0;
const cronometro = new Chorometer(()=> console.log(`Contador: ${contador++}`))
cronometro.start();
setTimeout(() => {
    cronometro.stop();
}, 4000);


// Ejercicio 3
