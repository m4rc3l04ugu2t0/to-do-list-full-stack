import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { useForm } from "react-hook-form";
import { User } from "../../types/userTypes";
import { useCreateUser } from "../../services/mutations";
import { actionsType } from "../../contexts/reducer/actionsType";

export const FormPostUser = () => {
    const { dispatch } = useContext(ContextClicks);
    const { register, handleSubmit, reset } = useForm<User>();
    const mutationCreateUser = useCreateUser();

    const handleFormSubmit = async (data: User) => {
        dispatch({ type: actionsType.CLOSE_CREATE_USER });
        localStorage.setItem("userName", data.name);
        mutationCreateUser.mutate(data);
        reset();
    };
    return (
        <>
            <form
                method="post"
                action="post"
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex justify-center flex-col gap-8 items-center w-full h-3/4"
            >
                <input
                    type="text"
                    placeholder="User Name"
                    {...register("name")}
                    className="w-11/12 md:w-3/4  h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none"
                />

                <input
                    type="email"
                    placeholder="Enter a fictitious email"
                    {...register("email")}
                    className="w-11/12 md:w-3/4 h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="w-11/12 md:w-3/4 h-10 md:h-14 py-2 px-6 bg-gray-700 rounded outline-none"
                />

                <input
                    type="submit"
                    className="bg-green-500 w-20 p-2 mt-6 rounded"
                    value="Save"
                />
            </form>
        </>
    );
};
