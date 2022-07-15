import { Request, Response } from "express"
import connection from "../database/connection"

export const getTasks = async (req: Request,res: Response) => {
    let errorCode = 400
    try {

      const search = req.query.search as string

      if(search){
        const [result] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE LOWER(title) LIKE "%${search.toLocaleLowerCase()}%";
        `)
        return res.status(200).send({message: "Request realizada com sucesso.", tasks: result})
      }


      const [result] = await connection.raw(`
      SELECT * FROM Tasks;
      `)

      res.status(200).send({message: "Request realizada com sucesso.", tasks: result})
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  } 