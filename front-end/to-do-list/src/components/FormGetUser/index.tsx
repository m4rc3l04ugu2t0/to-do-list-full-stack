import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { useForm } from "react-hook-form";
import { User } from "../../types/userTypes";
import { useLoginUser } from "../../services/mutations";
import { actionsType } from "../../contexts/reducer/actionsType";

export const FormGetUser = () => {
    const { state, dispatch } = useContext(ContextClicks);
    const { register, handleSubmit, reset } = useForm<User>();
    const mutationLoginUser = useLoginUser();

    const handleFormSubmit = async (data: User) => {
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
        <>
            <form
                action="post"
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex justify-center flex-col gap-8 items-center w-full h-3/4"
            >
                <input
                    type="text"
                    placeholder="Email fictitious"
                    {...register("email")}
                    className="w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="w-11/12 md:w-3/4 h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none"
                />
                <input
                    type="submit"
                    className="bg-green-500 w-20 p-2 mt-6 rounded cursor-pointer"
                    disabled={mutationLoginUser.isPending}
                    value="Login"
                />
            </form>
        </>
    );
};
