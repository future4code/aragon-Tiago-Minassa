import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const perfumeCreated = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const {name, brand} = req.body
        const price = Number(req.body.price)
        const ml = Number(req.body.ml)

        if (!name || !brand || !ml ) {
            errorCode = 404
            throw new Error("Os parametros name, brand, ml não encontrados")
        }
        
        if (typeof name !== "string" || typeof brand !== "string") {
            errorCode = 422
            throw new Error("Os parametros name e brand precisam ser em formato string.")
        }

        const newPerfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml
        }

        await connection(TABLE_PERFUMES)
        .insert({
            id: newPerfume.id,
            name: newPerfume.name,
            brand: newPerfume.brand,
            price: newPerfume.ml
        })

        res.status(201).send({message: "Perfume Criado."})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}