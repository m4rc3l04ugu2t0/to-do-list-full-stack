import bcrypt from 'bcrypt'
import { connect } from '../database'
import jwt from 'jsonwebtoken'
import Tasks from '../types/tasks'

export class AuthUser {
  name: string
  email: string
  password: string

  constructor(name = '', email = '', password = '') {
    this.name = name
    this.email = email
    this.password = password
  }

  verifyToken(token: string) {
    const verifyToken = jwt.verify(token, 'secret-pass-token')

    return verifyToken as { id: string; name: string; email: string }
  }

  useAuthorizationToken(token: string) {
    const verifyToken = this.verifyToken(token)
    console.log('verify', verifyToken)
    if (!verifyToken) {
      return false
    }

    return { name: verifyToken.name, email: verifyToken.email }
  }

  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  }

  tokenGenerate(id: string, name: string, email: string) {
    const token = jwt.sign({ id, name, email }, 'secret-password-token', {
      expiresIn: '1d'
    })
    return token
  }

  async getUser(email: string, password: string) {
    const conn = await connect()
    const [rows] = await conn.query(
      `SELECT * FROM users WHERE email = '${email}'`
    )

    if (Array.isArray(rows)) {
      const user = rows[0]
      if (user && 'password' in user) {
        const passwordValid = bcrypt.compareSync(password, user.password)
        if (!passwordValid) {
          return false
        }

        user.password = undefined
        const token = this.tokenGenerate(user.id, user.name, user.email)

        return { token, user }
      }
    }
    return false
  }

  async userTasks(email: string) {
    const decodedToken = this.verifyToken(email)
    if (!decodedToken.email) return false
    console.log('decodedToken', decodedToken)
    const conn = await connect()
    const [rows] = await conn.query(
      `SELECT * FROM tasks WHERE user_id = '${decodedToken.id}'`
    )
    return rows
  }

  async updatedTask(id: string, task: Tasks) {
    const conn = await connect()
    const [updatedTask] = await conn.query('UPDATE tasks SET ? WHERE id = ?', [
      task,
      id
    ])
    return updatedTask
  }

  async createTaskByUser(task: Tasks, token: string) {
    const decodedToken = this.verifyToken(token)
    if (!decodedToken.email) return false
    console.log('decodedToken', decodedToken)

    const conn = await connect()
    const [result] = await conn.query('INSERT INTO tasks SET ?', {
      ...task,
      done: false,
      user_id: decodedToken.id
    })
    return result
  }

  async createUser(name: string, email: string, password: string) {
    const hash = this.hashPassword(password)
    const dataUserValid = { name, email, password: hash }
    const conn = await connect()
    const [createdUser] = await conn.query(
      'INSERT INTO users SET ?',
      dataUserValid
    )

    if ('insertId' in createdUser) {
      const token = this.tokenGenerate(
        createdUser.insertId.toString(),
        name,
        email
      )
      return { token, createdUser }
    }
  }

  async deleteTasks(id: string, token: string) {
    const decodedToken = this.verifyToken(token)

    if (!decodedToken) return false

    const conn = await connect()
    const [deleteTaskBD] = await conn.query('DELETE FROM tasks WHERE id = ?', [
      id
    ])

    return deleteTaskBD
  }

  async deleteUser(token: string) {
    const decodedToken = this.verifyToken(token)

    if (!decodedToken) return false

    const conn = await connect()
    const [deletedUser] = await conn.query('DELETE FROM users WHERE id = ?', [
      decodedToken.id
    ])

    return deletedUser
  }

  checkEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  checkName(name: string) {
    const re = /^[a-zA-Z\s]+$/
    return re.test(name)
  }

  checkPassword(password: string) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return re.test(password)
  }

  checkDataUser(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      return false
    }

    if (
      this.checkPassword(password) &&
      this.checkName(name) &&
      this.checkEmail(email)
    ) {
      return false
    }

    return true
  }
}
