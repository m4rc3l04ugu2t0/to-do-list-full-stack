import { FastifyInstance } from 'fastify'
import {
  deleteTasks,
  getTasksByUser,
  createTaskByUser,
  updatedTask
} from '../../controllers/tasks-controller'
import middleValidateTask from '../../middlewares/middleValidateTask'

export const TasksRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/user/:id/tasks', getTasksByUser)

  fastify.post('/user/:id/tasks', createTaskByUser)

  fastify.delete('/user/:id/task/:id', deleteTasks)

  fastify.put(
    '/user/:id/task/:id',
    { preHandler: [middleValidateTask] },
    updatedTask
  )
}
