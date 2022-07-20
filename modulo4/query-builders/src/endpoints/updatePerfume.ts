import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const editPerfume =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const {price} = req.body

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("O preço preciso ser em formato de numero")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("O preço precisa ser maior que 0")
        }

        const productExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (productExists.length === 0) {
            errorCode = 404
            throw new Error("Perfume não encontrado!")
        }

        await connection(TABLE_PERFUMES)
        .update({
            price: price
        })
        .where({
            id
        })

        res.status(200).send({message: "Preço atualizado!"})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
} 