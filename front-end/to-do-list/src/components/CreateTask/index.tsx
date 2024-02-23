import { SubmitHandler, useForm } from "react-hook-form";
import { PropTasks } from "../../types/tasksTypes";
import { useCreateTask } from "../../services/mutations";

export const CreateTask = ({ isCreate: isEditing }: { isCreate: boolean }) => {
    const { mutate, isPending } = useCreateTask();
    const { register, handleSubmit } = useForm<PropTasks>();

    const handleCreateTask: SubmitHandler<PropTasks> = (data) => {
        mutate(data);
    };

    return (
        <div
            className={`w-4/6 h-auto bg-gray-800 absolute right-8 top-6  md:max-w-3xl rounded p-3 ${
                isEditing ? "block" : "hidden"
            }`}
        >
            <form
                method="post"
                action="post"
                onSubmit={handleSubmit(handleCreateTask)}
                className="flex flex-col gap-3"
            >
                <input
                    type="text"
                    placeholder="Task Name"
                    className="w-full p-2 bg-gray-700 rounded outline-none"
                    {...register("title")}
                />
                <textarea
                    placeholder="Task Description"
                    className="w-full p-2 bg-gray-700 rounded outline-none"
                    {...register("description")}
                />

                <div className="flex gap-3">
                    <button className="bg-red-500 p-2 rounded">Cancel</button>
                    <input
                        type="submit"
                        className="bg-green-500 p-2 rounded"
                        disabled={isPending}
                        value={isPending ? "Saving..." : "Save"}
                    />
                </div>
            </form>
        </div>
    );
};
