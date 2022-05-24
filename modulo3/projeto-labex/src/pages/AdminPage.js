import { useNavigate } from "react-router-dom"

function AdminPage() {
    const navigate = useNavigate();

    return(
        <main>
            <h1>LabeX</h1>
            <button onClick={() => navigate("/") }>Logout</button>
            <hr></hr>
            <h2>Crie uma nova viagem</h2>
            <hr></hr>
            <h2>Lista de Viagens</h2>
        </main>
    )
}

export default AdminPage