import { AuthUser } from '../Auth/AuthUser'
import { connect } from '../database'
import { User } from '../types/user'

export const usersBD = async (email: string, password: string) => {
  const authUser = new AuthUser()

  const user = await authUser.getUser(email, password)
  return user
}

export const sessionUser = (token: string) => {
  const authUser = new AuthUser()
  return authUser.verifyToken(token)
}

export const createUserBD = async (user: User) => {
  const authUser = new AuthUser()
  return authUser.createUser(user.name, user.email, user.password)
}

export const getUsersBD = async () => {
  const conn = await connect()
  const [users] = await conn.query('SELECT * FROM users')
  return users
}

export const updatedUserBD = async (id: string, user: User) => {
  const conn = await connect()
  const [updatedUser] = await conn.query('UPDATE users SET ? WHERE id = ?', [
    user,
    id
  ])
  return updatedUser
}

export const deleteUserBD = async (token: string) => {
  const auth = new AuthUser()
  const deletedUser = await auth.deleteUser(token)
  return deletedUser
}
