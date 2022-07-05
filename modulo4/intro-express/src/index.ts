import express, {Request, Response} from 'express'
import cors from 'cors'




type TypeUser = {
    id: number
    nome: string
    phone: number
    email: string
}

let users:TypeUser[] = [

    {
    "id": 1,
    "nome": "Tiago",
    "phone": 31997290718,
    "email": "tiagocastelob"
},
{
    "id": 2,
    "nome": "Dev nilson",
    "phone": 31997290717,
    "email": "lua.com"
},
{
    "id": 3,
    "nome": "Astrodev",
    "phone": 31997290715,
    "email": "astrodev.com.br"
},
]

const app = express()

app.use(cors())
app.use(express.json())

//1)
app.get('/caminho', (req: Request, res: Response) => {
    res.send("Servidor Funcionando!")
})

//3)
app.get('/users', (res: Response) => {
    res.send(users)
})

//4
app.get('/users/:id', (req: Request, res: Response) => {
         const id = Number(req.params.id)
         const user = users.filter(user => user.id === id)
})







app.listen(3003, () => console.log("Servidor esta rodando na porta 3003.")) 
