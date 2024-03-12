import { User } from '../types/user'

export class AuthUser {
  name: string
  email: string
  password: string

  constructor(name = '', email = '', password = '') {
    this.name = name
    this.email = email
    this.password = password
  }

  messageError(typeError: string[]) {
    let messages: Record<string, string> = {
      name: 'Name is required',
      email: 'Email is required',
      password: 'Password is required'
    }

    return (messages = {
      name: messages[typeError[0]],
      email: messages[typeError[1]],
      password: messages[typeError[2]]
    })
  }

  checkDataUser(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      return false
    }
    return true
  }

  setAuthUser(user: User) {
    this.name = user.name
    this.email = user.email
    this.password = user.password
  }

  getAuthUser() {
    return {
      name: this.name,
      email: this.email,
      password: this.password
    }
  }
}
