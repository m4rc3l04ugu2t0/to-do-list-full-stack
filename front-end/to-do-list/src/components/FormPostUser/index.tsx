import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useCreateUser } from "../../services/mutations";
import { actionsType } from "../../contexts/reducer/actionsType";
import {
  CreateUserProp,
  createUserSchema,
} from "../../schemas/createUserSchema";
import { FormUsersComponents } from "../FormUsersComponents";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormPostUser = () => {
  const { dispatch } = useContext(ContextClicks);
  const createUserForm = useForm<CreateUserProp>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const mutationCreateUser = useCreateUser();

  const { handleSubmit, reset, control } = createUserForm;

  const handleFormSubmit = async (data: CreateUserProp) => {
    mutationCreateUser.mutate(data);
    if (!mutationCreateUser.isError) {
      return;
    }
    if (localStorage.getItem("userName")) {
      return;
    }
    dispatch({ type: actionsType.CLOSE_CREATE_USER });
    localStorage.setItem("userName", data.name);
    reset();
  };

  return (
    <FormProvider {...createUserForm}>
      <form
        method="post"
        action="post"
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex justify-center flex-col gap-8 items-center w-full h-3/4"
      >
        {localStorage.getItem("userName") && (
          <span className="text-red-500">You are already logged in</span>
        )}

        {mutationCreateUser.isError && (
          <span className="text-red-500">User already exists</span>
        )}
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <>
              <FormUsersComponents.Input
                {...field}
                type="text"
                placeholder="Enter your name"
                className="w-11/12 md:w-3/4 h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none"
              />
              {fieldState.error && <span>{fieldState.error.message}</span>}
            </>
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <>
              <FormUsersComponents.Input
                type="text"
                placeholder="Email fictitious"
                {...field}
                className={`w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none `}
              />
              {fieldState.error && <span>{fieldState.error.message}</span>}
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <>
              <FormUsersComponents.Input
                type="password"
                placeholder="Password"
                {...field}
                className={`w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none `}
              />
              {fieldState.error && <span>{fieldState.error.message}</span>}
            </>
          )}
        />

        <input
          type="submit"
          className="bg-green-500 w-20 p-2 mt-6 rounded"
          value="Save"
        />
      </form>
    </FormProvider>
  );
};
