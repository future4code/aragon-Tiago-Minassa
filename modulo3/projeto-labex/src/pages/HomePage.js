import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

function HomePage() {
    const navigate = useNavigate();

    return(
        <main>
            <h1>LabeX</h1>
            <button onClick={() => navigate("AdminPage") }>Entrar</button>
            <hr></hr>
            <h2>Inscreva-se numa nova viagem!</h2>
            <hr></hr>
            <h2>Lista de Viagens</h2>
        </main>
    )
}

export default HomePage