import { createContext, useEffect, useState } from 'react'
import { useAuthorizationUser } from '../../services/queries'

interface PropInitialState {
  email: string
  name: string
  message: string
}

interface ContextType {
  user: PropInitialState
}

export const ContextDataUser = createContext({} as ContextType)

export const UserDataProvider = () => {
  const [user, setUser] = useState({
    email: '',
    name: '',
    message: 'initial'
  })
  const authorizationUserQuery = useAuthorizationUser()

  useEffect(() => {
    authorizationUserQuery.refetch()
    console.log('ssn')
  })
  console.log(authorizationUserQuery)
  if (authorizationUserQuery.isLoading) {
    setUser((prevState) => ({ ...prevState, message: 'loading' }))
  }
  if (authorizationUserQuery.isError) {
    console.log(authorizationUserQuery.error)
    setUser((prevState) => ({ ...prevState, message: 'error' }))
  }

  if (authorizationUserQuery.isSuccess) {
    console.log(authorizationUserQuery.data)
    setUser((prevState) => ({
      ...prevState,
      ...authorizationUserQuery.data,
      message: 'success'
    }))
  }

  return <ContextDataUser.Provider value={{ user }}></ContextDataUser.Provider>
}
