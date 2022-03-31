//Exercicio de interpretação de código - Analise o código
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 */
//1.a) O que vai imprimir no console?
//R: Primeira posição do elenco "Matheus Nachtergale"
//R: Denise fraga
//R: Canal Brasil, 19h

//2.
/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD",
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
 */
//a) O que vai ser impresso no console?
//R: Juca, 3, SRD
//R: Juba, 3, SRD
//R: Jubo, 3, SRD

//2.b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//R: Copia o objeto



//3.
/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a)O que vai ser impresso no console */
//R:

//Exercicios de escrita de código
//1.a)
const aluno1 = {
    nome: "Tiago",
    apelidos: ["ti", "titi", "ou agoit"],
}

function frase(objeto){
    let frase1 = `eu sou ${objeto.nome} mas pode me chamar de ${objeto.apelidos}`
return frase1
}
const primeiraTentativa = frase(aluno1)
console.log(primeiraTentativa)
 

//b) 
const novoAluno = {
    ... aluno1,
    apelidos:["Tiaguinho", "menor", "Tiasco"],

}
console.log(novoAluno)

//2.a)

const exemplo1 ={
nome: "Tiago",
idade: 22,
profissao: "estudante",
}

const exemplo2 ={
    nome: "Lucas",
    idade: 24,
    profissao: "medico",
}

function tabela(objeto){
  const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
  return array 
}
console.log(tabela(exemplo1)),
console.log(tabela(exemplo2))
