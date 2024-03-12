import { FastifyReply, FastifyRequest } from 'fastify'
import { User } from '../types/user'
import { AuthUser } from '../Auth/authUser'

export const middleValidateUser = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) => {
  const { name, email, password } = request.body as User
  const authUser = new AuthUser(name, email, password)

  if (!authUser.checkDataUser(name, email, password)) {
    return reply
      .status(400)
      .send({ message: 'Name, email and password are required' })
  }

  done()
}
