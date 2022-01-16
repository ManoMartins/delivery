import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
  async handle(resquest: Request, response: Response) {
    const { username, password } = resquest.body

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()

    const result = await authenticateDeliverymanUseCase.execute({ username, password })

    return response.json(result)
  }
}