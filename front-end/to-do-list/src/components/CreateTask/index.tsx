import { SubmitHandler } from "react-hook-form";
import { PropTasks } from "../../types/tasksTypes";
import { useCreateTask } from "../../services/mutations";
import { FormTask } from "../FormTasks";

export const CreateTask = ({ isCreate: isEditing }: { isCreate: boolean }) => {
    const createTaskMuataion = useCreateTask();

    const handleCreateTask: SubmitHandler<PropTasks> = (data) => {
        createTaskMuataion.mutate(data);
    };

    return (
        <div
            className={`w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                isEditing ? "block" : "hidden"
            }`}
        >
            <FormTask method={handleCreateTask} mutation={createTaskMuataion} />
        </div>
    );
};
