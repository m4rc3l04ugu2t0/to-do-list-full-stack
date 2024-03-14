import { FastifyReply, FastifyRequest } from 'fastify'
import { authorizationUser } from '../models/authorizationModel'

export const useAuth = (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization?.split(' ')[1]

  if (!token) {
    return reply.status(401).send({ message: 'Invalid token' })
  }
  const verifyToken = authorizationUser(token)
  if (!verifyToken) {
    return reply.status(401).send({ message: 'Invalid token' })
  }

  return reply.status(200).send(verifyToken)
}
