import { FastifyReply, FastifyRequest } from 'fastify'
import Tasks from '../types/tasks'
import {
  deleteTaskBD,
  updatedTaskBD,
  getTasksByUserBD,
  createTaskByUserBD
} from '../models/taskModel'

// contollers user

export const createTaskByUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string }
  const data: Tasks = request.body as Tasks
  const task = await createTaskByUserBD(data, id)
  return reply.status(201).send(task)
}

export const getTasksByUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string }
  const tasks = await getTasksByUserBD(id)
  return reply.status(200).send(tasks)
}

export const deleteTasks = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string }
  await deleteTaskBD(id)
  return reply.status(204).send({ message: 'Task deleted' })
}

export const updatedTask = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string }

  const data: Tasks = request.body as Tasks
  console.log(data)
  await updatedTaskBD(id, data)
  return reply.status(204).send({ message: 'Task updated' })
}
