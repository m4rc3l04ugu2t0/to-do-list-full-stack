import { app } from './server'
import { UserRoutes } from './routers/UserRouter/UserRouter'
import { TasksRoutes } from './routers/TasksRouter/TasksRouter'
import { UserAuthorization } from './routers/authRouter/UserToken'

export async function routes() {
  app.register(UserAuthorization)
  app.register(UserRoutes)
  app.register(TasksRoutes)
}
