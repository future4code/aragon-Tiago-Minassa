import { useNavigate } from "react-router-dom";
import Header from "../components/Header" 
import { goToSignUpPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import { requestLogin } from "../services/reuqests";
import useUnprotectedPage from "../hooks/useUnprotectedPage";

 function LoginPage() {
    useUnprotectedPage();

    const navigate = useNavigate;

    const { form, onChange, clear } = useForm({ email: "", password: ""})

    const login = (event) => {
        event.preventDefault();
        requestLogin(form, clear, navigate);
    }

    return(
        <main>
            <Header isProtected={false}
             />
        <section>
        <h3>Login</h3>
        <form onSubmit={login}></form>
       <label htmlFor="email"> Email: </label>
       <input 
       id={"email"}
       type={"email"}
       name={"email"}
       value={form.email}
       onChange={onChange}
       ></input>
       <br />
       <label htmlFor="password">Senha: </label>
       <input 
       id={"password"}
       type={"password"}
       name={"password"}
       value={form.password}
       onChange={onChange}
       ></input>
       <br />
       <button type={"submit"}>Entrar</button>
       <hr></hr>
       <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar.</h3>
       <button onClick={() => goToSignUpPage(navigate)}>Ir para cadastro</button>
        </section>
        </main>
    );
};
export default LoginPage


