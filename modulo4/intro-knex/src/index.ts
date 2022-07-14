import express, { response } from "express";
import cors from "cors";
import { Request, Response } from "express";
import connection from "./database/connection";
import { User } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

const [result] = await connection.raw(`SELECT * FROM Users_List`)


app.get("/usuarios", async(req: Request, res:Response) => {
let errorCode = 400
try{
  const search = req.query.search as string

  if(search){
    const [result] = await connection.raw(`
    SELECT * FROM Users_list
    WHERE LOWER(name) LIKE "%${search}%$;
    `)
    return res.status(200).send({user: result})
  }
} catch(error) {
response.status(error).send({message: error.message})
}
})


app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {name, email} = req.body
   

    if(!name || !email){
      throw new Error("Invalid parameters");
    }

    if(typeof name !== "string" || typeof email !== "string"){
      errorCode = 422
      throw new Error("name and email must be of type string"); 
    }

    if(!email.includes("@")){
      throw new Error("Invalid email");
    }

    const [checkEmail] = await connection.raw (`
    SELECT * FROM Users_List
    WHERE email = "${email}";
    `)

    if(checkEmail[0]){
      errorCode = 400
      throw new Error("E-mail already registered"); 
    }

    const newUser: User = {
      id: Number(Date.now()),
      name: name,
      email: email
    }

    await connection.raw(`
    INSERT INTO Users_List (id, name, email)
    VALUES (${newUser.id}, "${newUser.name}", "${newUser.email}");
    `)
    res.status(201).send({mensage: "User created successfully", user: newUser})
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})
