import { ButtonCreateTask } from './ButtonCrateTask'

import { FormUser } from '../FormUser'
import { GetTasks } from './tasks'

export const Tasks = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full h-12 border-solid border-slate-800 border-b-2  items-center justify-between">
        <h1 className="m-auto">Tasks</h1>
        <ButtonCreateTask className="mr-4" />
      </div>
      <FormUser />
      <GetTasks />
    </div>
  )
}
