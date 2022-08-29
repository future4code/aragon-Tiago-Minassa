import { UserBusiness} from "../../business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock} from "../mocks/servives/IdGeneratorMock"
import { HashManagerMock } from "../mocks/servives/HashManagerMock"
import { AuthenticatorMock} from "../mocks/servives/AuthenticatorMock"
import { ISignupInputDTO } from "../../models/User"
import { BaseError } from "../../erros/BaseError"
import test from "node:test"

describe("Testing UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso!")
        expect(response.token).toEqual("token-mock")
    })

    test("retorna erro se email já for cadastrado", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "alice",
                email: "astrodev@gmail.com",
                password: "alice99"
            }

            await userBusiness.signup(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Email já cadastrado.")
            }
        }
    })

    test("retorna erro se email tiver formato inválido ", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "alice",
                email: "alicegmail.com",
                password: "alice99"
            }

            await userBusiness.signup(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido.")
            }
        }
    })

    test("retorna erro se senha tiver menos que 6 caracteres ", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "alice",
                email: "alice@gmail.com",
                password: "alice"
            }

            await userBusiness.signup(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres.")
            }
        }
    })
}) 