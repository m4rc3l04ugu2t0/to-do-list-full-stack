import { FastifyInstance } from 'fastify'
import {
  getUsers,
  postUser,
  deleteUser,
  user
} from '../../controllers/user-controller'
import { middleValidateUser } from '../../middlewares/midleValidateUser'

export const UserRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/user', getUsers)
  fastify.post('/user', { preHandler: [middleValidateUser] }, postUser)
  fastify.post('/user/login', user)
  fastify.delete('/user/:id', deleteUser)
}
