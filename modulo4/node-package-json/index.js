// 1a)Exercicios propostos aula 1 - back-end
// Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//R: Acessamos argumentos passados aos nossos comandos e scripts através de process.argv

//1b)
const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(process.argv[4])  + Number(process.argv[3]) 

console.log(`Olá ${nome} você tem ${idade} anos. Em sete anos você tera ${novaIdade} Anos!`)

