const ler = require('readline-sync');

let n = ler.questionFloat(" digite a quantidade de numeros devem ser lidos");
 let fatorial = 1;
let soma =0;
let i = 1; 



while (i <= n) {
    let numero = ler.questionFloat("Digite o número:"+ i);
    soma += numero; 

    fatorial *= i;

    console.log("Número digitado:"+ numeros ); 
   
}

console.log("Os números digitados foram:");
console.log("Soma dos números: "+ soma );
console.log("Fatorial de" +n+ fatorial);