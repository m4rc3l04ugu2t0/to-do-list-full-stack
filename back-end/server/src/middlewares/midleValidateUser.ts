import { FastifyReply, FastifyRequest } from 'fastify'
import { User } from '../types/user'
import { AuthUser } from '../Auth/AuthUser'

export const middleValidateCreateUser = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) => {
  const { name, email, password } = request.body as User
  const authUser = new AuthUser()

  if (!authUser.checkDataUser(name, email, password)) {
    return reply.status(400).send({ message: 'Data is not valid' })
  }

  done()
}

export const middleValidateGetUser = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) => {
  const { email, password } = request.body as User

  if (!email || !password) {
    return reply.status(400).send({ message: 'Data is not valid' })
  }

  done()
}
