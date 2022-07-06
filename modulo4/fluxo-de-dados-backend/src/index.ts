import express, {Request, Response } from 'express'
import cors from 'cors'
import { RecordWithTtl } from 'dns'
import { produtos } from './data'


const app = express()

app.use(cors())
app.use(express.json)

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!")
})

//1)
app.get("/test", (req: Request, res: Response) => {
    try{
        res.status(200).send({ messagem: "Hello dev, esta API está funcionando!" })
    }catch(err){
        res.status(500).send({ messagem: err.message})
    }
})

//3)

app.get("/produtos", (req: Request, res: Response) => {
    try{
        res.status(201).send({ messagem: "Requisição executada com sucesso!", produtos: produtos })
    } catch (err) {
        res.status(500).send({ menssagem: err.message })
    }
})

