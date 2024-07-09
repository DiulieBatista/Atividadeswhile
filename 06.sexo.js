const ler = require('readline-sync');

let nome;
let sexo;
let mulheres = 0;
let homens = 0;
let num = 1;
let percentM=0;
let percenth=0;
do {
    nome = ler.question(`Digite seu nome ${i + 1}: `).toLowerCase();
    sexo = ler.question(`Digite seu sexo ${i + 1} ('homem' ou 'mulher'):  `).toLowerCase();
    num = ler.questionInt(" deseja imforma outra pessoa aperte enter ou 0 para sair ");
  
    if (sexo === 'mulher') {
        mulheres++;
    } else if (sexo === 'homem') {
        homens++;
    }
} while(num == 1 );

let total =mulheres+homens;
percentM=total/mulheres;
percenth=total/homens;

console.log(`A quantidade de homens é: ${percentM}.`);
console.log(`A quantidade de mulheres é: ${percenth}.`);
