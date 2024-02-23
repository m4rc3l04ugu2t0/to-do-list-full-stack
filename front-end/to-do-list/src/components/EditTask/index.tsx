import { SubmitHandler } from "react-hook-form";
import { useUpdateTask } from "../../services/mutations";
import { FormTask } from "../FormTasks";
import { PropTasks } from "../../types/tasksTypes";

interface EditTaskProps {
    edit: boolean;
    dataUpdate?: PropTasks; // Making dataUpdate optional
}

export const EditTask = ({ edit, dataUpdate }: EditTaskProps) => {
    const updateTaskMutation = useUpdateTask();
    // console.log(dataUpdate);

    const handleUpdateTask: SubmitHandler<PropTasks> = (data) => {
        if (dataUpdate && dataUpdate._id) {
            // Ensure _id is defined
            updateTaskMutation.mutate({
                ...dataUpdate,
                ...data, // Assuming you want to merge with the incoming data
            });
        } else {
            console.error("Task _id is undefined");
            // Handle the case where _id is undefined, e.g., show an error message
        }
    };

    return (
        <div
            className={`w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                edit ? "block" : "hidden"
            }`}
        >
            <FormTask method={handleUpdateTask} mutation={updateTaskMutation} />
        </div>
    );
};
