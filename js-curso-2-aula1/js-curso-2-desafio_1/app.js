//1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// 2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole(){
  console.log('O click no botão Console funciona.');
}

//3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlert(){
  alert('Eu amo JS!');
}

// 4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt(){
  let nomeCidade = prompt('Fale o nome de uma cidade no Brasil.');
  alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

// 5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma(){
  let num1 = prompt('Escolha o primeiro número inteiro.');
  let num2 = prompt('Escolha o segundo número inteiro.');
  let soma = Number(num1) + Number(num2);

  alert(`O resultado da soma dos números ${num1} + ${num2} = ` + soma)
}

// 6. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
  console.log('Olá Mundo!');
}
olaMundo();

// 7. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome){
//  console.log('Olá, ' + nome + ' !');
  console.log(`Olá, ${nome}!`)
}
olaNome('Camila');

// 8. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let dobroDoNumero = dobraNumero(5);
function dobraNumero(num){
  return console.log(num * 2)
}

// let dobroDoNumero = dobraNumero(5);

// 9. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(num1, num2, num3){
  media = (num1 + num2 + num3) / 3;
  return console.log(media);
}

calculaMedia(2,2,2);

// 10. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero1, numero2){
  if (numero1 > numero2){
    return console.log(`Entre ${numero1} e ${numero2}, o ${numero1}, é maior`);
  }
  else{
    return console.log(`Entre ${numero1} e ${numero2}, o ${numero2}, é maior`);
  }
}

maiorNumero(35,10)

/* 
Alternativamente, é possível substituir o if-else acima, por uma mais simples, usando o operador ternário.

function maiorNumero(numero1, numero2){
  return a > b ? a : b;
}

Para ler o operador ternário corretamente: A é maior que B? Se sim, retorne / exiba A. Se não, retorne / exiba B.
*/

// 11. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calculoMultiplicacao(numero){
  return console.log(numero * numero);
}

calculoMultiplicacao(2);
