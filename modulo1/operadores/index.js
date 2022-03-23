// exercicio 1
let idade = Number ("Qual é a sua idade?")
let idadeAmigo = Number ("Qual a idade do seu melhor amigo?")
console.log("Sua idade é maior é maior que a do seu melhor amigo?", idade>idadeAmigo)

//exercicio 2
let numeroUsuario = Number ("insira um numero par")
console.log (typeof numeroUsuario)

const restoDaDivisao = 300 % 2
console.log(restoDaDivisao)

const restoDaDivisao1 = 24 % 2
console.log(restoDaDivisao1)

const restoDaDivisao2 = 72 % 2
console.log(restoDaDivisao2)

//Todas as respostas foram 0 pois numero par divido por 2 não sobra nada na divisão

// exercicio 3

const idadeDoUsuario = prompt("Qual sua idade?")
console.log(typeof idadeDoUsuario)
const idadeTexto = "22"
const idadeNumero = Number(idadeDoUsuario)

console.log(typeof idadeNumero)

const primeiroValor = 22 //anos
const segundoValor = 12 //meses
const resultadoMeses = primeiroValor * segundoValor
console.log(resultadoMeses) //264 meses 


const terceiroValor = 30 //dias
const resultadoDias = resultadoMeses * terceiroValor
console.log(resultadoDias) //7920

const quartoValor = 24 //horas
const resultadoHoras = quartoValor * resultadoDias
console.log(resultadoHoras)


