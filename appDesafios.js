/* ### Desafios - Aula 1 (Iniciando com JavaScript) ###
**Importante: para que o código dessa página funcione, é preciso habilitá-la no arquivo index.html.
*/

// 1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
// alert('Boas vindas ao nosso site!');

//2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
// let nome = 'Lua';

// 3. Crie uma variável chamada idade e atribua a ela o valor 25.
// let idade = 25;

// 4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// let numeroDeVendas = 50;

// 5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

// let saldoDisponivel = 1000;

// 6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
// alert('Erro! Preencha todos os campos.')

// 7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// let mensagemDeErro = 'Erro! Preencha todos os campos.'
// alert(mensagemDeErro)

// 8. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
// let nomeUsuario = prompt('Olá! Por favor, escreva o seu nome: ')

// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// let idadeUsuario = prompt('Agora, me diga a sua idade: ')

// 10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

// if(idadeUsuario >= 18){
//   alert('Já pode tirar a habilitação!!! :D')
// }

/* ### Desafios - Aula 2 (Condicionais e concatenação) ### */

// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// let diaDaSemana = prompt('Em qual dia da semana estamos?')

// if (diaDaSemana == 'Sábado'){
//   alert('Bom final de semana!')
// } if (diaDaSemana == 'Domingo'){
//   alert('Bom final de semana!')
// } else{
//   alert('Boa semana!')
// }

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

//let numeroUsuario = prompt('Por favor, insira um número qualquer: ');

//if(numeroUsuario > 0){
//  alert('Você optou por um número positivo!');
//}else{
//  alert('Você escolheu um número negativo!');
//}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

//pontuacao = 80;
//if(pontuacao >= 100){
//  alert('Parabéns, você venceu!')
//} else{
//  alert('Tente novamente para ganhar!')
//}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// saldo = 50000000
// alert(`O saldo da sua conta é R$ ${saldo}.`)

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// nome = prompt('Por favor, insira o seu nome!')
// alert(`${nome}, muito bem-vindo ao nosso site!`)

/* ### Desafios - Aula 3 (Loops e tentativas) ### */
// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 1;
// while (contador <= 10){
//   console.log(contador);
//   contador++
// }
// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador = 10;
// while (contador >= 0){
//   console.log(contador);
//   contador--
// }

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let numero = prompt('Escolha um número para sua contagem regressiva.')

// while(numero >= 0){
//   console.log(numero);
//   numero--
// }

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

//let numero = prompt('Escolha o número final da sua contagem.');
//let contador = 0;
//while(contador <= numero){
//  console.log(contador);
//  contador++
//}

// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
//saudacao = 'Hello world! Boas-vindas!';
//console.log(saudacao)

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

//nome = 'Camila';
//console.log(`Olá, ${nome}!`)

// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

//alert(`Olá, ${nome}!`)


// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

//linguagem = prompt('Qual a lingugagem de programação que você mais gosta?')
//console.log(`Minha linguagem de programção favorita é ${linguagem}.`)

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

//valor1 = 40;
//valor2 = 85;
//resultado = valor1 + valor2
//console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
//valor3 = prompt('Escolha o primeiro número. (1/2)');
//valor4 = prompt('Escolha o segundo número. (2/2)')
//resultado2 = valor3 - valor4
//console.log(`A diferença entre ${valor3} e ${valor4} é ${resultado2}`)

//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
//idade = prompt('Informe a sua idade: ')

//if (idade >= 18){
//  console.log('Você é maior de idade')
//} else{
//  console.log('Você é menor de idade.')
//}

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

//let numero = prompt('Escolha um número qualquer: ')

//if (numero >= 0){
//  console.log('Número positivo.')
//} if (numero == 0){
//  console.log('Número neutro!')
//} else{
//  console.log('Número negativo.')
//}

//9. Use um loop while para imprimir os números de 1 a 10 no console.

//let contador = 1;

//while (contador <= 10){
//  console.log(contador++)
//}

//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

//let nota = 3;

//if(nota >= 7){
//  console.log('Aprovado')
//} else{
//  console.log('Reprovado')
//}

//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

//let numAleatorio = Math.random()
//console.log(numAleatorio)

//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

//let numAleatorio2 = parseInt(Math.random() * 10 + 1)
//console.log(numAleatorio2)

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

//let numAleatorio3 = parseInt(Math.random() * 1000 + 1)
//console.log(numAleatorio3)