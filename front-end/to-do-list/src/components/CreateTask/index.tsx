import { SubmitHandler } from "react-hook-form";
import { PropTasks } from "../../types/tasksTypes";
import { useCreateTask } from "../../services/mutations";
import { FormTask } from "../FormTasks";
import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const CreateTask = () => {
    const createTaskMuataion = useCreateTask();
    const { state } = useContextClick();

    const handleCreateTask: SubmitHandler<PropTasks> = (data) => {
        if (!localStorage.getItem("userId")!) return console.log("error");
        createTaskMuataion.mutate(data);
    };

    return (
        <div
            className={`w-4/6 h-auto bg-zinc-900 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                state.closeModelCreateTask ? "block" : "hidden"
            }`}
        >
            <FormTask
                method={handleCreateTask}
                mutation={createTaskMuataion}
                actionType={actionsType.CLOSE_CREATE_TASK}
            />
        </div>
    );
};
