import express, { Request, Response } from "express"
import cors from "cors"
import { users, User } from "./data"

//1
const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
  console.log("O servidor esta funcionando na porta 3003!")
})

//2
app.get("/users", (req: Request, res: Response) => {
  try {
    const role = req.query.role
    if (role !== "Admin" && role !== "Normal") {
      res.statusCode = 422
      throw new Error("Escolha entre contas 'Normal' ou conta 'Admin' ")
    }
    if (!role) {
      return res.status(200).send(users)
    }
    const userFilter = users.filter(user =>
      user.role === role
    )
    res.status(200).send({ users: userFilter })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})


//5
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    if (!id) {
      res.statusCode = 400
      throw new Error("User ID doesn't exist!")
    }

    const i = users.findIndex(user => user.id === id)
    users.splice(i, 1)

    res.status(201).send({ message: "Usuario deletado com sucesso!" })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})
