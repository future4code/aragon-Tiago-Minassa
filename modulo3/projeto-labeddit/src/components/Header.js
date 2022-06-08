import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

// Função que renderiza condicionalmente o header de cada página.
function Header(props) {
    // variável navigate -> Armazena a chamada do Hook useNavigate do react-router-dom
    const navigate = useNavigate();

    // Função que promove o efeito de logout do sistema
    const logout = () => {
        // Estrutura condicional de confirmação do logout.
        if (window.confirm("Tem certeza de que deseja sair?")) {
            localStorage.removeItem("token");
            localStorage.removeItem("userEmail");
            goToLoginPage(navigate);
            alert("Logout com sucesso!");
        };
    };

    return (
        <header>
            <h1>LabEddit</h1>
            {props.isProtected && (
                <>
                    <h3>Bem-vindo, {localStorage.getItem("userEmail")}!</h3>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </header>
    );
};

export default Header;