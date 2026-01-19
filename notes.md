# Anotações & conteúdos de aula

# O que é lógica de programação?

Quando falamos em lógica de programação, estamos nos referindo à capacidade de organizar e estruturar ideias para resolver problemas por meio do código. Antes mesmo de escrever uma linha de programação, precisamos pensar como um programa pensa: em etapas bem definidas, instruções claras e decisões baseadas em condições.
Uma boa maneira de entender isso é pensar no processo de montar um sanduíche. Você começaria pelo pão? Colocaria o queijo antes ou depois da mortadela? A maionese antes ou depois da alface? Ao descrever essas ações em uma ordem específica, você está criando um algoritmo — uma sequência lógica de passos para atingir um objetivo. Mesmo sem perceber, você está usando lógica para resolver uma tarefa do dia a dia.

Na programação, seguimos o mesmo princípio: transformamos uma ideia ou problema em uma sequência de instruções que o computador consegue seguir, como é mostrado nas etapas abaixo:

![Imagem](https://i.imgur.com/JdkmZJI.png)

E aí vem a pergunta: Mas para que serve isso? Por que aprender lógica de programação?

A resposta é simples: a lógica é a base do raciocínio computacional. Seja você alguém que pretende desenvolver sites, aplicativos, jogos, sistemas empresariais ou até automações com inteligência artificial — tudo começa com lógica. Ela te ensina a pensar de forma clara, objetiva e estruturada, o que vai te ajudar não só a programar, mas também a resolver problemas com mais eficiência.

Mais do que apenas escrever código, quem trabalha com tecnologia precisa compreender o problema, planejar a solução e dividi-la em etapas que possam ser executadas. E é exatamente isso que a lógica de programação desenvolve em você. Pode parecer um pouco abstrato no início, mas dominar esse pensamento estruturado vai facilitar — e muito — o seu aprendizado de qualquer linguagem de programação no futuro.

Para fechar, imagine que eu te pergunto agora: qual seria a lógica para calçar um sapato? Provavelmente você saberia listar os passos: pegar as meias, pegar o par de sapatos, sentar-se, calçar uma meia de cada vez, colocar os sapatos, ajustar e amarrar. Veja só — você acabou de montar um algoritmo, mesmo sem escrever código. Esse é o poder da lógica: ensinar você a resolver problemas por etapas e com clareza.

# O que é uma linguagem de programação?

Ao iniciar sua jornada no mundo da programação, você pode se perguntar: "O que exatamente é uma linguagem de programação?"
Computadores não entendem português, inglês ou qualquer outro idioma humano. Eles operam em um nível muito mais básico, lidando com impulsos elétricos que são representados por códigos binários, compostos apenas por 0s e 1s. Para que possamos nos comunicar com essas máquinas, usamos um intermediário: a linguagem de programação.

Ela é um conjunto de palavras, símbolos e regras que permite que você escreva instruções que o computador consegue interpretar e executar. É como aprender um novo idioma, só que, em vez de conversar com pessoas, você está dizendo à máquina o que ela deve fazer.

Pode parecer curioso, mas existe até uma linguagem chamada Emojicode, escrita só com emojis. Ela não é usada no mercado, mas mostra como a programação também pode ser divertida, criativa e até inesperada.

E falando em "inesperado", é importante saber: errar faz parte do processo de aprender a programar. Bugs, dúvidas e mensagens de erro vão aparecer, e isso é parte da prática. Além disso, programação é uma área onde pesquisar faz parte do dia a dia, você vai procurar soluções, ler documentação e explorar novos caminhos o tempo todo. Programar é resolver problemas e entender isso, torna o processo mais leve.

Neste curso, vamos usar a linguagem JavaScript para aprender a lógica de programação e isso por alguns motivos:

- É uma das linguagens mais populares e usadas no mundo.
- Funciona diretamente no navegador.
- Permite ver o resultado do código quase em tempo real.
- É uma ótima porta de entrada para o desenvolvimento web e para aprender lógica.

# O que você precisa saber

Toda linguagem tem suas regras e com a programação não é diferente. Essas regras são chamadas de **sintaxe**. A sintaxe define como os comandos devem ser escritos para que o JavaScript consiga entender e executar o que você quer que ele faça. É como montar uma frase: você até pode dizer "comprar pão eu vou", que dá para entender, mas não soa natural. Em programação, se você escrever fora da ordem esperada, o computador simplesmente não entende.
No JavaScript, a ordem, os símbolos e até a pontuação são importantes. Um pequeno detalhe, como esquecer de fechar uma chave (`}`), trocar aspas simples por duplas ou omitir um ponto e vírgula pode fazer tudo parar de funcionar. E tudo bem! Errar faz parte do processo. O importante é praticar e observar os sinais que o código nos dá.

## Variáveis `alert()` e `prompt()`

Uma variável é um **espaço na memória do computador**, em que guardamos informações que vamos usar mais tarde. Pode ser um número, um texto, um resultado de cálculo ou uma resposta do usuário. Você pode imaginar uma variável como um baú com etiqueta: dentro dele você guarda algo, e na etiqueta você escreve um nome para lembrar o que tem lá dentro. Por exemplo, você pode ter um baú com a etiqueta `nome`, e dentro dele guardar o valor `"Ana"`. Mais tarde, se precisar desse nome, basta olhar no baú `nome` e pegar o que está lá dentro.

A forma mais comum de criar uma variável em JavaScript é usando a palavra let, seguida do nome da variável, o sinal de igual (`=`) e o valor que queremos guardar. Assim:

```javascript
// Guarda o nome de uma pessoa
let nome = "Ana";

// Guarda a idade
let idade = 25;

// Guarda um valor de saldo
let saldoDisponivel = 1000;
```

Toda variável tem:

- Um nome (como `nome`, `idade`)
- Um **sinal de igual (=)**, que faz a atribuição
- Um valor (como `"Ana"` ou `25`)

É através de uma variável que podemos exibir um valor na tela, fazer contas, tomar decisões ou controlar o fluxo do programa. E já que falamos em **exibir algo na tela**, deixa eu te apresentar uma função muito comum no JavaScript: a **função `alert()``**. Ela serve para mostrar uma mensagem na tela, em forma de uma pequena janela de aviso. É uma forma de visualizar se o código está funcionando.

## Estruturas de decisão

Voltando ao exemplo do sanduíche. Antes de começar, você precisa verificar se tem pão. Se tiver pão, você faz o sanduíche. Se não tiver, você talvez opte por fazer outra coisa, como um miojo. Perceba: você está tomando uma decisão com base em uma condição. Em programação, usamos o if(se) e o else (senão) justamente para isso: verificar condições e executar diferentes ações dependendo do resultado. Vamos ver isso no código:

```javascript
let temPao = prompt("Você tem pão em casa? Responda com sim ou não");

if (temPao === "sim") {
    alert("Fazer sanduíche");
} else {
    alert("Fazer miojo");
}
```

Nesse exemplo:

- Usamos `prompt()` para perguntar algo à pessoa usuária.
- A resposta é armazenada na variável `temPao`.
O `if` verifica se a resposta foi `"sim"`. O `===` é um **operador de comparação**. Ele serve para verificar se dois valores **são iguais**.
- Se for, mostramos uma mensagem. Caso contrário, mostramos outra com o `else`.
- Além do `===`, também temos **outros operadores de comparação** que são bastante utilizados no dia a dia de desenvolvimento:

| Operador | Significado | Exemplo |
| :--- | :--- | :--- |
| `>` | Maior que | `idade > 18` |
| `<` | Menor que | `idade < 18` |
| `>=` | Maior ou igual | `idade >= 18` |
| `<=` | Menor ou igual | `idade <= 18` |
| `===` | Igual a (valor e tipo) | `idade === 18` |

# Para saber mais: ponto e vírgula no JavaScript

No JavaScript, o uso de ponto e vírgula (`;`) é uma prática recomendada. A linguagem possui um mecanismo chamado "inserção automática de ponto e vírgula" (*automatica semicolon insertion - ASI*), que tenta adicionar ponto e vírgulas automaticamente em certos pontos do código onde eles são ausentes.

Isso significa que, em alguns casos, o JavaScript tentará "corrigir" a falta de ponto e vírgula inserindo-o automaticamente. No entanto, a interpretação do ASI pode levar a comportamentos inesperados e erros sutis, especialmente quando as regras não são claras.

Portanto, para evitar possíveis problemas e garantir a clareza do código, muitos desenvolvedores preferem adicionar explicitamente ponto e vírgula em seus programas.

Apesar da inserção automática de ponto e vírgula poder ajudar a mitigar erros de sintaxe, é uma boa prática adicionar ponto e vírgula manualmente para evitar ambiguidade e problemas de interpretação. Isso é particularmente importante em situações como quando várias instruções estào em uma mesma linha, ao usar declarações de retorno de valor ou ao minificar o código.

Em projetos colaborativos ou de grande escala, a consistência no estilo de codificação e a clareza do código são cruciais, e o uso explícito de ponto e vírgula contribui para um código mais legível e menos sujeito a erros de interpretação por parte dos programadores e do próprio mecanismo de ASI.

- [Leitura complementar da documentação sobre o JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)

# Para saber mais: operadores lógicos

Quando escrevemos programas em JavaScript, frequentemente nos deparamos com a necessidade de tomar decisões com base em condições. É aqui que os operadores lógicos entram em cena e nos ajudam a criar uma lógica robusta e eficaz.
A seguir, vamos explorar os operadores lógicos de uma forma simples e fácil de entender. Teremos exemplos claros para ilustrar seu funcionamento.

## `AND (&&)``

O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e avaliar se ambas são verdadeiras. Se ambas as condições forem verdadeiras, o resultado será… verdadeiro. Caso contrário, logicamente será falso. Por exemplo:

```javascript
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
```

## `OR (||)``

O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma das condições é verdadeira. Se uma das condições for verdadeira, o resultado será verdadeiro. Se ambas forem falsas, o resultado será falso. Veja um exemplo:

```javascript
let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}
```

### Outros tipos de operadores lógicos

| Operador | Nome | Exemplo | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| `==` | Igual | `A == B` | Verdadeiro se **A for igual** a B |
| `===` | Estritamente Igual | `A === B` | Verdadeiro se valor e tipo forem iguais |
| `!=` | Diferente | `A != B` | Verdadeiro se **A não for igual** a B |
| `<` | Menor que | `A < B` | Verdadeiro se **A for menor que** B |
| `>` | Maior que | `A > B` | Verdadeiro se **A for maior que** B |
| `<=` | Menor ou igual | `A <= B` | Verdadeiro se **A for menor ou igual** a B |
| `>=` | Maior ou igual | `A >= B` | Verdadeiro se **A for maior ou igual** a B |

#### *Operadores lógicos*

| Operador | Nome | Exemplo | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| `&&` | E / AND | `(A > B) && (B == C)` | Verdadeiro se A for maior que B **E** B for igual a C |
| `||` | OU / OR | `(A > B) || (B == C)` | Verdadeiro se A for maior que B **OU** B for igual a C |
| `!` | NEGAÇÃO | `!(A == B)` | Verdadeiro se A **NÃO** for igual a B |