import { FastifyInstance } from 'fastify'
import {
  deleteTasks,
  getTasksByUser,
  createTaskByUser,
  updatedTask
} from '../../controllers/tasks-controller'
import middleValidateTask from '../../middlewares/middleValidateTask'

export const TasksRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/user/tasks', getTasksByUser)

  fastify.post('/user/create/tasks', createTaskByUser)

  fastify.delete('/user/task/:id', deleteTasks)

  fastify.put(
    '/user/task/:id',
    { preHandler: [middleValidateTask] },
    updatedTask
  )
}
