/* Exercicio de interpretação de códigps

1. Leia o código abaixo:
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Explique o que o código faz. Qual teste ele realiza?

R: O codigo pergunta um numero para o usuario testar
SE esse numero divio por 2 for igua 0 então ele passou
no teste, caso o resultado dessa divisão for diferente disso
ele não passa no teste 

b) Para o que tipos de numeros ele imprime no console "Passou
no teste?"

R: numeros pares, pois numeros pares divido por dois não possuem
resto

c) Para que tipo de numeros a mensagem é "Não passou no teste?"

R: Numeros impares, pois dividos por 2 o resultado será diferente de 0

2. O codigo abaixo foi feito por uma pessoa desenvolvedora, contratada
para automatizar algumas tarefas de supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

R: Para gerar uma condcional de fruta/preço e imprimir no console
a mensagem com a informação

b)Qual será a mensagem impressa no console, se o valor da fruta for
"maçã"?

R:"O preço da fruta maçã é R$2.25"

c) c) Considere que um usuário queira comprar uma Pêra, qual seria a 
mensagem impressa no console se retirássemos o break que está logo acima
 do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

R: o preço seria 5 que está abaixo do default, pois sem o "break"
não quebrariamos o código e ele continuaria lendo a função até o prox.
"break"

3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha esta fazendo?

R: Pedindo um numero ao usuario que seja do timpo "Number"

b) Considere que usuario digitou o numero 10. Qual será a mensagem
no terminal? e se o numero fosse -10?

R: Essa mensagem passou no teste, caso fosse -10 iria dar undefined

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

R: Sim pois não foi usado o return mensagem para utilizarmos o console.log(mensagem)
fora da função
*/

/* Exercicios de escrita de código
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir
 (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
 */

    let pergunta = prompt("Quantos nos você tem?")
    let respotaDoUsuario = Number(pergunta)

    if (respotaDoUsuario >= 18){
        console.log("Eba você pode dirigir!")
    }   else{
        console.log("Poxa, você precisa esperar mais um pouquinho pra tirar sua carteira!")
    }

    /*2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) 
    ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa NoLite!".
     Utilize o bloco if/else */

/*      let qualTurno = prompt("Qual turno você estuda? Responda a com a inicial do turno M/V/N")
     let turnoDoUsuario =(qualTurno)

    if (qualTurno === "V" || turnoDoUsuario === "v"){
        console.log("Boa tarde, estudante!")
    } else if (qualTurno === "M"||qualTurno === "m"){
        console.log("Bom dia, estudante!")
    } else if (qualTurno === "N"||qualTurno === "n"){
        console.log("Boa noite, estudante!")
    } else{
        console.log("Inicial invalida! Tente novamente.")
    }
 */
    /* 3.Repita o exercício anterior, mas utilizando a 
    estrutura de switch case agora.
     */

    let qualTurno = prompt("Qual turno você estuda? Responda a com a inicial do turno M/V/N")
    let turnoDoUsuario =(qualTurno)
    switch(qualTurno){
        case 'm':
            console.log('Boa tarde, estudante!')
            break
        case 'n':
            console.log('Boa noite, estudante!')
            break
        case 'v':
            console.log('Boa tarde, estudante!')
            break
        default:
            console.log('Inicial invalida! Tente novamente')
            break
    }
