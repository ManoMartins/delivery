import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface ICreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({
    username,
    password,
  }: ICreateClient) {
    const clientAlreadyExists = await prisma.clients.findFirst({
      where: { username: { mode: "insensitive", contains: username } },
    })

    if (clientAlreadyExists) {
      throw new Error("Client already exists")
    }

    const hashPassword = await hash(password, 10)

    await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      }
    })
  }
}