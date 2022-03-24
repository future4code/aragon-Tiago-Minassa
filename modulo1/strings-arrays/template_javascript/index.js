// Exercicios de interpretação de código 
let array
console.log('a. ', array) //array foi declarada porem nao foi atrelado nenhum valor então o resultado é undefined

array = null
console.log('b. ', array) //arral foi atrelado o valor nulo então seu resultado será o mesmo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11 itens na lista

let i = 0
console.log('d. ', array[i]) //posição 0 é o item 3

array[i+1] = 19
console.log('e. ', array) //let 1 = 0, 0+1 = 19 então na ordem dos itens o item 1 é igual a 19 ficaria [3, 19 ....]

const valor = array[i+6]
console.log('f. ', valor) // i = 0 + 6 = 6

//Exercicio 2 de interpretação

const frase = prompt("digite uma frase")
console.log(frase.toUpperCase().replaceAll("A","I"), frase.lenght)

//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//R: Subi num onibus em Mirrocos

//Exercicios de escrita de código

let email = prompt("Qual seu email?")
let nome = prompt("Qual seu nome?")

console.log("O email", email, "foi cadastrado com sucesso. Seja bem-vindo(a)", nome)
 
//Exercicio 2 de escrita de código
//a)
let comidas = ["parmegiana", "risto", "file com fritas", "cupim na braza", "pudim"]

//b)
console.log("essas são minhas comidas favotitas", comidas)


console.log("Essas são minhas comidas favoritas:" + `${comidas[0]} 
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)

//c)

comidas[1] = prompt("Qual é seu prato preferido?")
console.log(comidas)

//exercicio 3 de escrita de código
//a)

let listaDeTarefas = []

//b) c)
listaDeTarefas[0] = prompt("Diga 1 tarefa que precisa realizar durante o dia-a-dia")
listaDeTarefas[1] = prompt("Diga + uma tarefa que precisa realizar hoje?")
listaDeTarefas[2] = prompt("Juro que é a ultima, nos diga outra tarefa que vai realizar hoje")

console.log(listaDeTarefas)

//d

const usuarioNumero = prompt("Escolha o numero de 0 a 2")
listaDeTarefas.pop()
console.log(listaDeTarefas)
