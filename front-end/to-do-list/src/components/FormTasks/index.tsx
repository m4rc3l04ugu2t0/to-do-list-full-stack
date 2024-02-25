import { SubmitHandler, useForm } from "react-hook-form";
import { PropTasks } from "../../types/tasksTypes";
import { UseMutationResult } from "@tanstack/react-query";
import { useContextClick } from "../../contexts/contextClicks/useContextClicks";

export const FormTask = ({
    method,
    mutation,
    actionType,
}: {
    method: SubmitHandler<PropTasks>;
    mutation: UseMutationResult<void, Error, PropTasks, unknown>;
    actionType: "CLOSE_EDIT_TASK" | "CLOSE_DELETE_TASK" | "CLOSE_CREATE_TASK";
}) => {
    const { register, handleSubmit, reset } = useForm<PropTasks>();
    const { dispatch } = useContextClick();

    const handleFormSubmit = async (data: PropTasks) => {
        dispatch({ type: actionType });
        await method(data);
        reset();
    };

    return (
        <form
            method="post"
            action="post"
            onSubmit={handleSubmit(handleFormSubmit)}
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
                <button
                    className="bg-red-500 p-2 rounded"
                    type="button"
                    onClick={() => dispatch({ type: actionType })}
                >
                    Cancel
                </button>
                <input
                    type="submit"
                    className="bg-green-500 p-2 rounded"
                    disabled={mutation.isPending}
                    value={mutation.isPending ? "Saving..." : "Save"}
                />
            </div>
        </form>
    );
};
