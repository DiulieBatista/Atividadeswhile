const ler = require('readline-sync');

let nome;
let cidade;
let moraBH = 0; 
let naoBH = 0; 

for (let i = 0; i < 20; i++) {
    nome = ler.question(`Digite seu nome ${i + 1}: `).toLowerCase();
    cidade = ler.question(`Digite sua cidade ${i + 1}: `).toLowerCase();

    if (cidade === 'belo horizonte') {
        moraBH++;
    } else {
        naoBH++;
    }
}

console.log(`A quantidade de pessoas que moram em Belo Horizonte é ${moraBH}.`);
console.log(`A quantidade de pessoas que NÃO moram em Belo Horizonte é ${naoBH}.`);
