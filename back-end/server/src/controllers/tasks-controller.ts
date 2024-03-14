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
  const token = request.headers.authorization?.split(' ')[1]
  if (!token) {
    return reply.status(401).send({ message: 'Invalid token' })
  }
  const data: Tasks = request.body as Tasks
  const task = await createTaskByUserBD(data, token)
  return reply.status(201).send(task)
}

export const getTasksByUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const tokenUser = request.headers.authorization?.split(' ')[1]

  if (!tokenUser) {
    return reply.status(401).send({ message: 'Invalid token' })
  }

  const tasks = await getTasksByUserBD(tokenUser)

  if (!tasks) {
    return reply.status(404).send({ message: 'User not found' })
  }
  return reply.status(200).send(tasks)
}

export const deleteTasks = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = request.headers.authorization?.split(' ')[1]
  const { id } = request.params as { id: string }
  if (!token) {
    return reply.status(401).send({ message: 'Invalid token' })
  }
  await deleteTaskBD(id, token)
  return reply.status(204).send({ message: 'Task deleted' })
}

export const updatedTask = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const token = request.headers.authorization?.split(' ')[1]

  if (!token) {
    return reply.status(401).send({ message: 'Invalid token' })
  }

  const { id } = request.params as { id: string }
  const data: Tasks = request.body as Tasks

  const taskUpdated = await updatedTaskBD(id, data, token)

  if (!taskUpdated) {
    return reply.status(404).send({ message: 'Task not found' })
  }
  return reply.status(204).send({ message: 'Task updated' })
}
