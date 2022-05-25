import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

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

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:tiago/login",{
          Headers: {
              Authorizarion: "tiago-minassa-aragon"
          }  
        }, body).then(res => console.log(res.data))
        .catch(error => console.log(error.reponse))
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