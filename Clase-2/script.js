function operador(fn,a,b){
    fn(a,b);
}
let suma = (a,b)=> a+b;
let resta = (a,b) => a-b;
let multiplicacion = (a,b) => a*b;
let division = (a,b) => a/b;

operador(suma,1,2);
