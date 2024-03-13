import { useQuery } from '@tanstack/react-query'
import { authorizationUser, getIdUser, getUserByTasks } from './api'

export const useIdUser = () => {
  return useQuery({
    queryKey: ['userId'],
    queryFn: getIdUser
  })
}

// export const useUserByTasks = (ids: string[] | undefined) => {
//     return useQueries({
//         queries: (ids ?? []).map((id) => {
//             return {
//                 queryKey: ["task", { id }],
//                 queryFn: () => getUserByTasks(id!),
//             };
//         }),ContextDataUser
//     });
// };

export const useAuthorizationUser = () => {
  return useQuery({
    queryKey: ['authorization'],
    queryFn: () => authorizationUser()
  })
}

export const useUserByTasks = () => {
  return useQuery({
    queryKey: ['userBytasks'],
    queryFn: () => getUserByTasks(localStorage.getItem('sessionToken')!)
  })
}
