import { FastifyInstance } from 'fastify'
import { useAuth } from '../../controllers/authorizationController'

export const UserAuthorization = async (fastify: FastifyInstance) => {
  fastify.get('/user/authorization', useAuth)
}
