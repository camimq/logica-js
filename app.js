alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while(chute != numeroSecreto){
  chute = prompt('Escolha um número entre 1 e 10.');
  // se chute for igual ao número secreto; executa.
  if(chute == numeroSecreto){
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativas!`);
  } else{
    if(chute > numeroSecreto){
      alert(`O número é menor que que ${chute}`);
    }
    else{
      alert(`O número é maior que que ${chute}`);
    }
    // tentativas = tentativas + 1
    tentativas++;
  }
}