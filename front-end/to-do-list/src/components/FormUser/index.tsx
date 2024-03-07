import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { User } from "../../types/userTypes";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../services/mutations";
import { DeleteUser } from "../DeleteUser";
import { actionsType } from "../../contexts/reducer/actionsType";

export const FormUser = () => {
    const { state, dispatch } = useContext(ContextClicks);
    const { register, handleSubmit, reset } = useForm<User>();
    const mutationCreateUser = useCreateUser();

    const handleFormSubmit = async (data: User) => {
        dispatch({ type: "CLOSE_CREATE_USER" });
        localStorage.setItem("userName", data.name);
        mutationCreateUser.mutate(data);
        reset();
    };

    // interface QueryResult {
    //     fieldCount: number;
    //     affectedRows: number;
    //     insertId?: number | undefined;
    //     info: string;
    //     serverStatus: number;
    //     warningStatus: number;
    //     changedRows: number;
    // }

    return (
        <>
            <div
                className={`${
                    state.closeCreateUser ? "flex" : "hidden"
                } justify-center p-4 flex-col items-center w-80 md:w-6/12 h-3/6 md:h-2/3 bg-black rounded  z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-black`}
            >
                <div className="absolute top-2 right-0 flex items-center gap-2">
                    <button className="bi bi-box-arrow-in-right w-20 h-5 flex items-center justify-center  text-xl hover:text-green-500"></button>
                    <button
                        onClick={() => {
                            dispatch({ type: actionsType.CLOSE_DELETE_USER });
                            dispatch({ type: "CLOSE_CREATE_USER" });
                        }}
                        className="bi bi-person-x w-20  hover:text-red-500"
                    ></button>
                    <button
                        onClick={() => dispatch({ type: "CLOSE_CREATE_USER" })}
                        className="w-20 h-5 flex items-center justify-center  text-2xl hover:text-red-500"
                    >
                        <p className="bi bi-x"></p>
                    </button>
                </div>
                <h2 className="md:text-3xl font-bold text-center mt-4">
                    Hi, welcome, thank you for testing this application
                </h2>

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
            </div>

            <DeleteUser />
        </>
    );
};
