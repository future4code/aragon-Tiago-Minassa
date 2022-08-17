import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
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

        expect(response.message).toEqual("Cadastro realizado com sucesso")
        expect(response.token).toEqual("token-mock")
    })
})

test("deve retonar erro, caso o email já esteja cadastrado", async () => {
    expect.assertions(2)
    try {
        const input: ISignupInputDTO = {
            name: "Alice",
            email: "astrodev@gmail.com",
            password: "moranguinho"
        }

        await UserBusiness.signup(input)
    } catch (error:unknown) {
        if (error instanceof BaseError) {
            expect(error.statusCode).toEqual(409)
            expect(error.message).toEqual("Email já cadastrado")
        }
    }
})