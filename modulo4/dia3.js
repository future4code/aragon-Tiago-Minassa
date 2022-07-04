const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123"
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha"
    }
];

const loginUsuario = (email, senha) => {
    if (email.includes("@") == senha.length >= 6) {
        for (let i = 0; i <= contas.length; i++) {
            
            const checaEmail = contas[i].email === email
            const checaSenha = contas[i].senha === senha
            const valida = checaEmail && checaSenha
            
            if (valida) {
                return "login efeituado com sucesso"
            }
            else {
                return "Dados incorretos rente novamente!"
            }
        }
    }
}

loginUsuario("bananinhacomgmail.", "bananinha")
