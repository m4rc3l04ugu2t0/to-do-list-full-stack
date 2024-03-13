import axios from 'axios'
import { PropTasks } from '../types/tasksTypes'
import { User } from '../types/userTypes'

const BASE_URL = 'http://localhost:3000/user'
const userId = localStorage.getItem('sessionToken')

export const authorizationUser = async () => {
  if (!localStorage.getItem('sessionToken')) return { name: 'Login' }
  const response = await axios.get(`${BASE_URL}/authorization`, {
    headers: {
      Authorization: `Bearer $Bearer ${localStorage.getItem('sessionToken')}`
    }
  })
  return await response.data
}

export const getIdUser = async () => {
  const response = await axios<User[]>(BASE_URL)
  return await response.data.map((userId: User) => userId.id)
}

export const getUser = async (userData: User) => {
  const response = await axios.post(`${BASE_URL}/login`, userData)
  localStorage.setItem('sessionToken', response.data.token)
  const data = await response.data
  return data
}

export const getUserByTasks = async (token: string | undefined) => {
  if (!token) return [1]
  const response = await axios(`${BASE_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return await response.data
}

export const createUser = async (data: User) => {
  const response = await axios.post(BASE_URL, data)
  localStorage.setItem('sessionToken', response.data.token)
  return await response.data
}

export const createTask = async (data: PropTasks) => {
  const response = await axios.post(`${BASE_URL}/create/tasks`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
    }
  })
  return await response.data
}

export const deleteUser = async () => {
  const response = await axios.delete(`${BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
    }
  })
  return await response.data
}

export const updateTask = async (data: {
  id?: string
  title: string
  description: string
  done?: boolean
}) => {
  await axios.put(`${BASE_URL}/${userId}/task/${data.id}`, data)
}

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/task/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
    }
  })
  return await response.data
}
