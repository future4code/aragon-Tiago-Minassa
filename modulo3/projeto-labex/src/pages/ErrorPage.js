import { useNavigate } from "react-router-dom"

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <main>
            <h1>PAGINA NÃO ECONTRADA</h1>
            <h1> ☠️ </h1>
            <button onClick={() => navigate("/") }>Voltar para pagina inicial</button>
        </main>
    )
}
export default ErrorPage