import bcrypt from 'bcrypt'
import { connect } from '../database'

export class AuthUser {
  name: string
  email: string
  password: string

  constructor(name = '', email = '', password = '') {
    this.name = name
    this.email = email
    this.password = password
  }

  hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  }

  comparePassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash)
  }

  async createUser(name: string, email: string, password: string) {
    const hash = this.hashPassword(password)
    const dataUserValid = { name, email, password: hash }
    const conn = await connect()
    const [createdUser] = await conn.query(
      'INSERT INTO users SET ?',
      dataUserValid
    )

    return createdUser
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

    this.name = name
    this.email = email
    this.password = password
    return true
  }
}
