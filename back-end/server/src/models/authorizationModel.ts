import { AuthUser } from '../Auth/AuthUser'

export const authorizationUser = (token: string) => {
  const authUser = new AuthUser()
  const verifyToken = authUser.useAuthorizationToken(token)

  return verifyToken
}
