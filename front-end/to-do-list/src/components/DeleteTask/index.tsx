import { useDeleteTask } from "../../services/mutations";
import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";
import { PropTasks } from "../../types/tasksTypes";

export const DeleteTask = ({ data }: { data: PropTasks }) => {
    const { mutate } = useDeleteTask();
    const { state, dispatch } = useContextClick();

    return (
        <div
            className={`w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                state.closeDeleteTask ? "block" : "hidden"
            }`}
        >
            <h1>Delete Task</h1>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex gap-3">
                <button
                    className="bg-red-500 p-2 rounded"
                    onClick={() =>
                        dispatch({ type: actionsType.CLOSE_DELETE_TASK })
                    }
                >
                    Cancel
                </button>
                <button
                    className="bg-green-500 p-2 rounded"
                    onClick={() => {
                        mutate(data.id);
                        dispatch({ type: actionsType.CLOSE_DELETE_TASK });
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
