/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo ao jogo!, Que a sorte esteja sempre ao seu favor!")

if(confirm("Quer iniciar uma nova partida?")) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let somaCartasUsuario = carta1Usuario.valor+carta2Usuario.valor
   
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()
   let somaCartasComputador = carta1Computador.valor+carta2Computador.valor

   console.log(`Cartas do Usuário: ${carta1Usuario.texto} e ${carta2Usuario.texto} = pontuação ${somaCartasUsuario}
Cartas do Computador: ${carta1Computador.texto} e ${carta2Computador.texto} = pontuação ${somaCartasComputador}`)

if(somaCartasUsuario===somaCartasComputador){console.log(`Empate!`)}
   else if(somaCartasUsuario>21){console.log(`O computador ganhou!`)}
   else if(somaCartasUsuario>somaCartasComputador){console.log(`O usuário ganhou!`)}
   else if(somaCartasComputador>somaCartasUsuario){console.log(`O computador ganhou!`)}
 else 
	console.log( "O jogo acabou")
}
const carta = comprarCarta(); 

