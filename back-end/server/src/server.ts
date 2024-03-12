import 'dotenv/config'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './router'

export const app = Fastify({ logger: true })

const port = parseInt(process.env.PORT ?? '3000')

const start = async () => {
  await app.register(cors)
  await app.register(routes)

  try {
    await app.listen({ port: port })
    // console.log(`Server running on port ${port}`);
  } catch (err) {
    process.exit(1)
  }
}

start()
