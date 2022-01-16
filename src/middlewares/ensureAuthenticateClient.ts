import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export async function ensureAuthenticateClient(resquest: Request, response: Response, next: NextFunction) {
  const authHeader = resquest.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: "JWT token is missing" })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "fcbdde027cf96349450decc582720297") as IPayload

    resquest.id_client = sub

    return next()
  } catch (err) {
    return response.status(401).json({ message: "Invalid JWT token" })
  }
}