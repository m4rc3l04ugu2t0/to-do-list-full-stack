import {
  SubmitHandler,
  useForm,
  FormProvider,
  Controller,
} from "react-hook-form";
import { PropTasks } from "../../types/tasksTypes";
import { UseMutationResult } from "@tanstack/react-query";
import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { FormTasksComponents } from "../FormTasksComponets";
import {
  CreateTaskProp,
  createTaskSchema,
} from "../../schemas/createTaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormTask = ({
  method,
  mutation,
  actionType,
}: {
  method: SubmitHandler<PropTasks>;
  mutation: UseMutationResult<void, Error, PropTasks, unknown>;
  actionType: "CLOSE_EDIT_TASK" | "CLOSE_DELETE_TASK" | "CLOSE_CREATE_TASK";
}) => {
  const createTaskForm = useForm<CreateTaskProp>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { dispatch } = useContextClick();

  const { handleSubmit, reset, control } = createTaskForm;

  const handleFormSubmit = async (data: CreateTaskProp) => {
    dispatch({ type: actionType });
    await method(data);
    if (actionType === "CLOSE_CREATE_TASK") {
      reset();
    }
  };

  return (
    <FormProvider {...createTaskForm}>
      <form
        method="post"
        action="post"
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-3 shadow-2xl shadow-black"
      >
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <>
                <FormTasksComponents.Input
                  {...field}
                  type="text"
                  placeholder="Task Name"
                  className="w-full p-2 bg-zinc-800 rounded outline-none"
                />
                {fieldState.error && (
                  <span className="text-red-500">
                    {fieldState.error.message}
                  </span>
                )}
              </>
            );
          }}
        />

        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <>
                <FormTasksComponents.TextArea
                  {...field}
                  placeholder="Task Description"
                  className="w-full p-2 bg-zinc-800 rounded outline-none"
                  name="description"
                />
                {fieldState.error && (
                  <span className="text-red-500">
                    {fieldState.error.message}
                  </span>
                )}
              </>
            );
          }}
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
