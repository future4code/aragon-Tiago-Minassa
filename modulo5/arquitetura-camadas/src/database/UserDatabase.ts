import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_ARQ_USERS = "Arq_Users"

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_ARQ_USERS)
            .insert(userDB)
    }

    public findByEmail = async (email: string) => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_ARQ_USERS)
            .select()
            .where({ email })

        return result[0]
    }

    public findById = async (id: string) => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_ARQ_USERS)
            .select()
            .where({ id })

        return result[0]
    }

    public getUsers = async (
        sort: string,
        limit: number,
        offset: number,
        name?: string
        ) => {
        if(!name){
            const result: IUserDB[] = await BaseDatabase.
            connection(UserDatabase.TABLE_ARQ_USERS)
            .select("id", "name", "email")
            .orderBy(`id`, sort)
            .limit(limit)
            .offset(offset)

        return result
        }

        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_ARQ_USERS)
            .select("id", "name", "email")
            .where({ name })

            return result
    }

    public deleteUserById = async (id: string) => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_ARQ_USERS)
            .delete()
            .where({ id })
    }
} 
