import { useDeleteTask } from '../../services/mutations'
import { useContextClick } from '../../contexts/contextClicks/useContextClicks'
import { actionsType } from '../../contexts/reducer/actionsType'
import { PropTasks } from '../../types/tasksTypes'
import { GenericComponents } from '../GenericComponents'

export const DeleteTask = ({ data }: { data: PropTasks }) => {
  const { mutate } = useDeleteTask()
  const { state, dispatch } = useContextClick()

  return (
    <GenericComponents.Div
      className={`w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
        state.closeDeleteTask ? 'block' : 'hidden'
      }`}
    >
      <GenericComponents.H1>Delete Task</GenericComponents.H1>
      <GenericComponents.P>
        Are you sure you want to delete this task?
      </GenericComponents.P>
      <GenericComponents.Div className="flex gap-3">
        <GenericComponents.Button
          className="bg-red-500 p-2 rounded"
          onClick={() => dispatch({ type: actionsType.CLOSE_DELETE_TASK })}
        >
          Cancel
        </GenericComponents.Button>
        <GenericComponents.Button
          className="bg-green-500 p-2 rounded"
          onClick={() => {
            mutate(data.id!)
            dispatch({ type: actionsType.CLOSE_DELETE_TASK })
          }}
        >
          Save
        </GenericComponents.Button>
      </GenericComponents.Div>
    </GenericComponents.Div>
  )
}
