import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { PropTasks } from "../../types/tasksTypes";
import { UseMutationResult } from "@tanstack/react-query";
import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { FormTasksComponents } from "../FormTasksComponets";

export const FormTask = ({
    method,
    mutation,
    actionType,
}: {
    method: SubmitHandler<PropTasks>;
    mutation: UseMutationResult<void, Error, PropTasks, unknown>;
    actionType: "CLOSE_EDIT_TASK" | "CLOSE_DELETE_TASK" | "CLOSE_CREATE_TASK";
}) => {
    const createTaskForm = useForm<PropTasks>();
    const { dispatch } = useContextClick();

    const { handleSubmit, reset } = createTaskForm;

    const handleFormSubmit = async (data: PropTasks) => {
        dispatch({ type: actionType });
        await method(data);
        reset();
    };

    return (
        <FormProvider {...createTaskForm}>
            <form
                method="post"
                action="post"
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col gap-3 shadow-2xl shadow-black"
            >
                <FormTasksComponents.Input
                    type="text"
                    placeholder="Task Name"
                    name="title"
                    className="w-full p-2 bg-zinc-800 rounded outline-none"
                />

                <FormTasksComponents.TextArea
                    placeholder="Task Description"
                    className="w-full p-2 bg-zinc-800 rounded outline-none"
                    name="description"
                />

                <FormTasksComponents.Field className="flex gap-3">
                    <FormTasksComponents.Button
                        className="bg-red-500 p-2 rounded"
                        onClick={() => dispatch({ type: actionType })}
                    >
                        Cancel
                    </FormTasksComponents.Button>
                    <input
                        type="submit"
                        className="bg-green-500 p-2 rounded cursor-pointer"
                        disabled={mutation.isPending}
                        value={mutation.isPending ? "Saving..." : "Save"}
                    />
                </FormTasksComponents.Field>
            </form>
        </FormProvider>
    );
};
