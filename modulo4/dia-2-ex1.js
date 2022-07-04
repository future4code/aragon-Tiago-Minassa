const clientes = [
    {
        id: 1, name: "fulano"
    },
    {
        id: 2, name: "ciclano"
    },
    {
        id: 3, name: "beltrano"
    },
    {
        id: 4, name: "fulana"
    },
]


const novaListaDeClientes = (idClientes, nameClientes) => {
    if (clientes.id === idClientes) {
        return `Error, Parâmetro inválido (${idClientes})`
    }
    else {
        clientes.push({id: idClientes, nome: nameClientes})
        return clientes
    }
}

novaListaDeClientes(10, "jere")
console.log(clientes)

    


