function checaRenovacaoRG():boolean {
    const anoAtual = 2022
    const anoNascimento = 1999
    const anoEmissao = 2018
 
    const idade:number = anoAtual - anoNascimento
    const tempoCarteira:number = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 
 console.log(checaRenovacaoRG())