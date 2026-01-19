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