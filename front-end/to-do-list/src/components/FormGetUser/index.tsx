import { ContextClicks } from "../../contexts/contextClicks";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { z } from "zod";
import { useLoginUser } from "../../services/mutations";
import { actionsType } from "../../contexts/reducer/actionsType";
import { useContext } from "react";
import { FormUsersComponents } from "../FormUsersComponents";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email({
            message: "Formato de e-mail inválido",
        })
        .toLowerCase(),
    password: z.string().min(6, {
        message: "A senha precisa ter no mínimo 6 caracteres",
    }),
});

type CreateUserProp = z.infer<typeof createUserSchema>;

export const FormGetUser = () => {
    const { state, dispatch } = useContext(ContextClicks);
    const createUserForm = useForm<CreateUserProp>({
        resolver: zodResolver(createUserSchema),
    });
    const mutationLoginUser = useLoginUser();

    const { register, handleSubmit, reset, control } = createUserForm;

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
                    render={({ field }) => (
                        <FormUsersComponents.Input
                            type="text"
                            placeholder="Email fictitious"
                            {...field}
                            className={`w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none `}
                        />
                    )}
                />

                <FormUsersComponents.ErrorMessage
                    name="email"
                    className="w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none "
                />

                <FormUsersComponents.Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className={`w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none `}
                />

                <FormUsersComponents.ErrorMessage
                    name="password"
                    className="w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none "
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
