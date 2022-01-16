import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(resquest: Request, response: Response) {
    const { username, password } = resquest.body

    const authenticateClientUseCase = new AuthenticateClientUseCase()

    const result = await authenticateClientUseCase.execute({ username, password })

    return response.json(result)
  }
}