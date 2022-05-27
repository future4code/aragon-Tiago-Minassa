import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { navigateToHome } from "../routes/coordinator";

function AdminPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(!token) {
            navigateToHome(navigate)
        }
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-minassa-aragon/trip/NoIFVcOiSgTKTIPVZwXS", {
        headers:{
            auth: token
        }
    }).then(res => console.log(res.data))
    .catch(err => console.log(err.response))
    }, [])

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