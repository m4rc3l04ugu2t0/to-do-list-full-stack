import { ContextClicks } from "../../contexts/contextClicks";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useLoginUser } from "../../services/mutations";
import { actionsType } from "../../contexts/reducer/actionsType";
import { useContext } from "react";
import { FormUsersComponents } from "../FormUsersComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserProp, createUserSchema } from "../../createUserSchema";

export const FormGetUser = () => {
    const { state, dispatch } = useContext(ContextClicks);
    const createUserForm = useForm<CreateUserProp>({
        resolver: zodResolver(createUserSchema),
    });
    const mutationLoginUser = useLoginUser();

    const { handleSubmit, reset, control } = createUserForm;

    const handleFormSubmit = async (data: CreateUserProp) => {
        mutationLoginUser.mutate(data);
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
                            {fieldState.error && (
                                <span>{fieldState.error.message}</span>
                            )}
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
                            {fieldState.error && (
                                <span>{fieldState.error.message}</span>
                            )}
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
