import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export async function ensureAuthenticateDeliveryman(resquest: Request, response: Response, next: NextFunction) {
  const authHeader = resquest.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: "JWT token is missing" })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "802da8e37b61334663688d257b916ab4") as IPayload

    resquest.id_deliveryman = sub

    return next()
  } catch (err) {
    return response.status(401).json({ message: "Invalid JWT token" })
  }
}