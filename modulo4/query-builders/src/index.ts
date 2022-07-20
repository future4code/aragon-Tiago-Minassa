import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { perfumeCreated } from "./endpoints/createPerfume";
import { getPerfumes } from "./endpoints/getPerfume";
import { editPerfume } from "./endpoints/updatePerfume";
import { deletePerfume } from "./endpoints/deletePerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post("/perfumes", perfumeCreated)

app.get("/perfumes", getPerfumes)

app.put("/perfumes/:id", editPerfume)

app.delete("/perfurmes/:id", deletePerfume)