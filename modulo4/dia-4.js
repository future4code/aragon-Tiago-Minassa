const geraItensUnicos = (arr1, arr2) => {
    const arrConcat = arr1.concat(arr2)
    const resultado = []

    for (let itemConcat of arrConcat) {
        const itemResultado = resultado.find((item) => item.nome === itemConcat.nome)

        if(!itemResultado) {
            resultado.push(itemConcat)
        }
    }

    return resultado
}

console.log(geraItensUnicos(primeiraLista, segundaLista))