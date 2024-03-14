import { FastifyInstance } from 'fastify'
import {
  getUsers,
  postUser,
  deleteUser,
  user
} from '../../controllers/user-controller'
import {
  middleValidateCreateUser,
  middleValidateGetUser
} from '../../middlewares/midleValidateUser'

export const UserRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/user', getUsers)
  fastify.post('/user', { preHandler: [middleValidateCreateUser] }, postUser)
  fastify.post('/user/login', { preHandler: [middleValidateGetUser] }, user)
  fastify.delete('/user', deleteUser)
}
