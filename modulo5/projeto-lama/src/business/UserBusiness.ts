import { BaseDatabase } from "../database/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { RequestError } from "../errors/RequestError"
import { ISignupInput } from "../models/User"

export class UserBusiness {
    constructor(
        private userDatabase: BaseDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}
    public signup = async (input: ISignupInput) => {
        const { name, email, password } = input

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string")
        }

        if (typeof email !== "string") {
            throw new RequestError("Parâmetro 'email' inválido: deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new RequestError("Parâmetro 'password' inválido: deve ser uma string")
        }
}

}