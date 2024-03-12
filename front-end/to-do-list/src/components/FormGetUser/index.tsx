import { ContextClicks } from "../../contexts/contextClicks";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useLoginUser } from "../../services/mutations";
import { actionsType } from "../../contexts/reducer/actionsType";
import { useContext } from "react";
import { FormUsersComponents } from "../FormUsersComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateUserPropLogin,
  createUserSchemaLogin,
} from "../../schemas/createUserSchema";

export const FormGetUser = () => {
  const { state, dispatch } = useContext(ContextClicks);
  const createUserForm = useForm<CreateUserPropLogin>({
    resolver: zodResolver(createUserSchemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const mutationLoginUser = useLoginUser();

  const { handleSubmit, reset, control } = createUserForm;

  const handleFormSubmit = async (data: CreateUserPropLogin) => {
    mutationLoginUser.mutate(data);
    if (!mutationLoginUser.isError) {
      return;
    }
    if (localStorage.getItem("userName")) {
      return;
    }
    if (state.closeLoginUser) {
      dispatch({
        type: actionsType.CLOSE_LOGIN_USER,
      });
    }
    dispatch({ type: actionsType.CLOSE_CREATE_USER });
    reset();
  };

  return (
    <FormProvider {...createUserForm}>
      <form
        action="post"
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex justify-center flex-col gap-6 items-center w-full h-3/4"
      >
        {localStorage.getItem("userName") && (
          <span className="text-red-500">You are already logged in</span>
        )}
        {mutationLoginUser.isError && (
          <span className="text-red-500">Invalid credentials</span>
        )}
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
          className="bg-green-500 w-20 p-2 mt-6 rounded cursor-pointer"
          disabled={mutationLoginUser.isPending}
          value="Login"
        />
      </form>
    </FormProvider>
  );
};
