import { useNavigate } from "react-router-dom";
import Header from "../components/Header" 
import { goToSignUpPage } from "../routes/coordinator";
export default function LoginPage() {
    const navigate = useNavigate;

    return(
        <main>
            <Header />
        <section>
        <h3>Login</h3>
       <label htmlFor="Login">Login: </label>
       <input id="Login"></input>
       <br></br>
       <label htmlFor="Senha">Senha: </label>
       <input id="Senha"></input>
       <br></br>
       <button>Entrar</button>
       <hr></hr>
       <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar.</h3>
       <button onClick={() => goToSignUpPage(navigate)}>Ir para cadastro</button>
        </section>
        </main>
    )
}

