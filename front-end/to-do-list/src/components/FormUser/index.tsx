import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { DeleteUser } from "../DeleteUser";
import { actionsType } from "../../contexts/reducer/actionsType";
import { FormPostUser } from "../FormPostUser";
import { FormGetUser } from "../FormGetUser";

export const FormUser = () => {
    const { state, dispatch } = useContext(ContextClicks);

    return (
        <>
            <div
                className={`${
                    state.closeCreateUser ? "flex" : "hidden"
                } justify-center p-4 flex-col items-center w-80 md:w-6/12 h-3/6 md:h-2/3 bg-black rounded  z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-black`}
            >
                <div className="absolute top-2 right-0 flex items-center gap-2">
                    <button
                        onClick={() =>
                            dispatch({ type: actionsType.CLOSE_LOGIN_USER })
                        }
                        className={`${
                            state.closeLoginUser
                                ? "bi bi-box-arrow-in-right"
                                : "bi bi-person-plus"
                        } w-20 h-5 flex items-center justify-center  text-xl hover:text-green-500`}
                    ></button>
                    <button
                        onClick={() => {
                            dispatch({ type: actionsType.CLOSE_DELETE_USER });
                            dispatch({ type: actionsType.CLOSE_CREATE_USER });
                        }}
                        className="bi bi-person-x w-20  hover:text-red-500"
                    ></button>
                    <button
                        onClick={() => {
                            if (state.closeLoginUser) {
                                dispatch({
                                    type: actionsType.CLOSE_LOGIN_USER,
                                });
                            }
                            dispatch({ type: actionsType.CLOSE_CREATE_USER });
                        }}
                        className="w-20 h-5 flex items-center justify-center  text-2xl hover:text-red-500"
                    >
                        <p className="bi bi-x"></p>
                    </button>
                </div>
                <h2 className="md:text-3xl font-bold text-center mt-4">
                    Hi, welcome, thank you for testing this application
                </h2>
                {state.closeLoginUser ? <FormPostUser /> : <FormGetUser />}
            </div>

            <DeleteUser />
        </>
    );
};
