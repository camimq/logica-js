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
  let media = (num1 + num2 + num3) / 3;
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

// 12. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function indiceIMC(altura, peso){
  let imc;
  return console.log(imc = peso / (altura * altura))
}

indiceIMC(175,100)

// 13. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// O cálculo fatorial consiste no resultado da multiplicação de um número, por todos os seus antecessores até 1.
function calculoFatorial(numero){
  if (numero === 0 || numero === 1){
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++){
    fatorial *= i;
  }
  return fatorial
}
console.log(calculoFatorial(5))

// 14. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolar(valorDolar){
  let conversao = valorDolar * 4.80
  // toFixed(), é usado para garantir duas casas decimais.
  return console.log(`$ ${valorDolar.toFixed(2)} equivale a R$ ${conversao.toFixed(2)}, na cotação de hoje (R$ 4.80).`)
}
converteDolar(1.00)

// 15. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularRetangulo (altura, largura){
  let area = altura * largura;
  let perimetro = 2 * (altura + largura)

  return console.log(`A área do retângulo é ${area}; enquanto o perímetro é ${perimetro}.`)
}
calcularRetangulo(1,1)


// 16. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularCirculo(raio){
  let pi = 3.14;
  let area = pi * (raio ** 2);
  let perimetro = 2 * pi * raio;

  return console.log(`A área do círculo é ${area.toFixed(2)}; enquanto o perímetro é ${perimetro.toFixed(2)}.`);
}
calcularCirculo(1)

// 17. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostraTabuada(numero){
  for (let i = 1; i <= 10; i++){
    let resultado = numero * i;
    
    console.log(`${numero} x ${i} = ${resultado}`)
  }
}

mostraTabuada(5)

// 18. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
console.log(listaGenerica);

// 19. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

// 20. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')
console.log(linguagensDeProgramacao);


// 21. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ['João', 'Maria', 'José'];
console.log(listaNomes[0])

// 22. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(listaNomes[1])

// 23. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(listaNomes[2])