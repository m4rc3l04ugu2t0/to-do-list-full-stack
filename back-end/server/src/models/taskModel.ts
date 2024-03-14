import { AuthUser } from '../Auth/AuthUser'
import Tasks from '../types/tasks'

// model user

export const getTasksByUserBD = async (token: string) => {
  const authUser = new AuthUser()

  const tasks = await authUser.userTasks(token)

  if (!tasks) return false

  return tasks
}

export const createTaskByUserBD = async (task: Tasks, token: string) => {
  const authUser = new AuthUser()

  const tasks = await authUser.createTaskByUser(task, token)

  return tasks
}

export const deleteTaskBD = async (id: string, token: string) => {
  const authUser = new AuthUser()
  console.log(id, 'idddd')
  const deletedTask = await authUser.deleteTasks(id, token)
  return deletedTask
}

export const updatedTaskBD = async (id: string, task: Tasks, token: string) => {
  const authUser = new AuthUser()

  const verifyToken = authUser.verifyToken(token)

  if (!verifyToken) return false

  const updatedTask = await authUser.updatedTask(id, task)
  return updatedTask
}
