import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createUserBD,
  deleteUserBD,
  getUsersBD,
  usersBD
} from '../models/userModel'
import { User } from '../types/user'

export const user = async (request: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = request.body as {
    email: string
    password: string
  }

  const user = await usersBD(email, password)

  if (!user) {
    return reply.status(404).send({ message: 'User not found' })
  }

  return reply.status(200).send(user)
}
export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = request.headers.authorization?.split(' ')[1]
  if (!token) {
    return reply.status(401).send({ message: 'Invalid token' })
  }
  const users = await getUsersBD()
  return reply.status(200).send(users)
}

export const postUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const data = request.body as User
  const user = await createUserBD(data)
  return reply.status(201).send(user)
}

export const deleteUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = request.headers.authorization?.split(' ')[1]
  if (!token) {
    return reply.status(401).send({ message: 'Invalid token' })
  }
  await deleteUserBD(token)

  return reply.status(204).send({ message: 'User deleted' })
}
