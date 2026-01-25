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
