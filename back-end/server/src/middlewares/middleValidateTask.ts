import { FastifyReply, FastifyRequest } from 'fastify'
import Tasks from '../types/tasks'

export default function middleValidateTask(
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) {
  const { title, description } = request.body as Tasks
  if (!title || !description || title === '' || description === '') {
    return reply
      .status(400)
      .send({ message: 'Title and description are required' })
  }
  done()
}
