const ler = require('readline-sync');

let idades  ;
let media;
let soma = 0;
for (let i = 0; i <5 ; i++) {
  
idades= ler.questionFloat(  "digite  varias idades  " + (i+1) + ":") ;

soma+=idades;
 
}
media= soma /5;
console.log("a media das idades e   : "+ media);
