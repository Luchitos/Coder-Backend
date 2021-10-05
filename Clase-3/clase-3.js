class Letras {
    constructor (timer, fn){
        this.timer = timer;
        this.myInterval = 0;
        this.fn = fn;
    }
    mostrarLetras(palabra){
        let caracter = palabra.split('');
        let counterCaracter = 0;
        this.myInterval = setInterval(()=> {
            if(counterCaracter == caracter.length){
                this.stop();
                this.fn();
                return;
            }
            console.log(caracter[counterCaracter]);
            counterCaracter++;
        },this.timer)
    }
    stop(){
        clearInterval(this.myInterval)
    }
}

let finalizar = () => console.log("Hemos finalizado")
let letras = new Letras(0,finalizar);
let letras1 = new Letras(250,finalizar);
let letras2 = new Letras(500,finalizar);
letras.mostrarLetras("BOCA");
letras1.mostrarLetras("JUNIORS");
letras2.mostrarLetras("ESTUDIANTE");
