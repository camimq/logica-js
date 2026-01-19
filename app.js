alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10.');

console.log(chute == numeroSecreto)
// se chute for igual ao número secreto; executa.
if(chute == numeroSecreto){
  alert(`Isso aí! Você descobriu o n[umero secreto ${numeroSecreto}!`)
} else{
  alert('Você errou! :(')
}