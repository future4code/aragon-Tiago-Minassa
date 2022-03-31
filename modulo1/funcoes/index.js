//Exercicio de interpretação de código
//1)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) O que vai ser aberto no console?
//R: Nada pois quando a função retorna algo, sua execução é interrompida.

//b) 10, 50

//2)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a) Explique o que essa função faz e qual é sua utilidade
//R: Essa é uma expressão de função pois há uma variavel antes da função
//essa função vai retonar o texto incluido pelo usuario em letras Maiusculas e vai confirmar com verdadeiro ou falso se o texto contém a palavra cenoura

//b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura            R: EU GOSTO DE CENOURA true
//ii.  CENOURA é bom pra vista        R: cenoura É BOM PRA VISTA true
//iii. Cenouras crescem na terra      R: CENOURAS CRESCEM NA TERRA false

//-------- exercicio de escrita de código 1
//a)
function imprimirFrase(){
    console.log(
    "Eu sou Tiago, tenho 22 anos, moro em Belo Horizonte e sou estudante.")
}
imprimirFrase()

//b)
function imprimirFrase2(nome, idade, endereco, profissao){
let informacao = `Eu sou ${nome} tenho ${idade} anos sou de ${endereco} e sou ${profissao}`
    console.log(informacao)
    return informacao
}

imprimirFrase2(`Tiago`, `22`, `Belo Horizonte`, `Desinger grafico`)

//--------- exercicio de escrita de codigo 2 
//a)

function somatoriaNumero(num1, num2){
    const soma = num1 + num2
   console.log(soma)
   return soma
}

somatoriaNumero(5, 8)
 
//b)
function maiorOuMenor (a, b){
    let comparacao = a >= b
    console.log(comparacao)
    return comparacao
}

maiorOuMenor(12, 9)

//c)
function parOuNao (number){
    const calculo = number % 2 === 0
    console.log(calculo)
    return calculo

}
parOuNao(24)
 
//d)
function menssage (texto){
    const palavras = texto
    console.log(palavras.length().toUpperCase())}

menssage("Vou tomar umas hoje!")

