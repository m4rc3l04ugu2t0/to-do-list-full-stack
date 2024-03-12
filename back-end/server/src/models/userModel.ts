import { AuthUser } from '../Auth/authUser'
import { connect } from '../database'
import { User } from '../types/user'

export const usersBD = async (email: string, password: string) => {
  const conn = await connect()
  const [user] = await conn.query(
    `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
  )

  return user
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

export const deleteUserBD = async (id: string) => {
  const conn = await connect()
  const [deletedUser] = await conn.query('DELETE FROM users WHERE id = ?', [id])
  return deletedUser
}
