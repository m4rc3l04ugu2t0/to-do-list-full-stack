import { SubmitHandler } from "react-hook-form";
import { useUpdateTask } from "../../services/mutations";
import { FormTask } from "../FormTasks";
import { PropTasks } from "../../types/tasksTypes";
import { actionsType } from "../../contexts/reducer/actionsType";
import { useContextClick } from "../../contexts/contextClicks/useContextClicks";

export const EditTask = ({ data }: { data: PropTasks }) => {
    const updateTaskMutation = useUpdateTask();
    const { state } = useContextClick();

    const handleUpdateTask: SubmitHandler<PropTasks> = (updateData) => {
        console.log(updateData);
        updateTaskMutation.mutate({
            ...data,
            ...updateData, // Assuming you want to merge with the incoming data
        });
    };

    return (
        <div
            className={`w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                state.closeModelEditTask ? "block" : "hidden"
            }`}
        >
            <FormTask
                method={handleUpdateTask}
                mutation={updateTaskMutation}
                actionType={actionsType.CLOSE_EDIT_TASK}
            />
        </div>
    );
};
