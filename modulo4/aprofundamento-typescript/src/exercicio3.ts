// Parte1 : entrada são os numeros e saida as estatisticas

type Media = {
    media: number,
    maior: number,
    menor: number
}

function obterEstatisticas(numeros: number[]):Media {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
console.log(obterEstatisticas([20, 4, 6, 8, 10]))