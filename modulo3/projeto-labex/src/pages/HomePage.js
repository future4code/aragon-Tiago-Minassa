import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { navigateToAdmin } from "../routes/coordinator"


function HomePage() {
    const navigate = useNavigate();
    const [inputUsuario, setInputUsuario] = useState("")
    const [inputSenha, setInputSenha] = useState ("")


    const handleInputUsuario = (event) => setInputUsuario(event.target.value)
    const handleInputSenha = (event) => setInputSenha(event.target.value)

    const login = () => {
        const body = {
            email: inputUsuario,
            password: inputSenha 
        }

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-minassa-aragon/login"

        axios.post(url, body, { 
          Headers: {
              Authorizarion: "tiago-minassa-aragon"
          }  
        },)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            navigateToAdmin(navigate);
            alert("Acesso efetuado com sucesso!")
        })
        .catch((error) => localStorage.setItem("token", error.reponse));
        alert("acesso negado");
 

    }

    return (
        <main>
            <h1>LabeX</h1>
            <br></br>
            <label htmlFor="usuario"> Usuario:
                <input onChange={handleInputUsuario} type="text" name="usuario" id="usuario" value={inputUsuario} ></input>
            </label>
            <br></br>
            <label htmlFor="senha"> Senha: 
                <input onChange={handleInputSenha} type="text" name="senha" id="senha" value={inputSenha}></input>
            </label>
            <br></br>
            <button onClick={login}>Entrar</button>
            <hr></hr>
            <h2>Inscreva-se numa nova viagem!</h2>
            <hr></hr>
            <h2>Lista de Viagens</h2>
        </main>
    )
}

export default HomePage