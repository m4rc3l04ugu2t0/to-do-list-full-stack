import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";

export const TaskOption = () => {
    const { state, dispatch } = useContext(ContextClicks);
    return (
        <div className="flex gap-6 items-center">
            <button
                onClick={() => {
                    dispatch({ type: "CHECK_TASK" });
                }}
                className={`{${
                    state.checkTask
                        ? "bi bi-check2-square text-green-600"
                        : "bi bi-clipboard-x text-yellow-600"
                } text-2xl w-10 h-10 hover:bg-yellow-600 hover:text-white transition-all rounded duration-300`}
            ></button>
            <button className="bi bi-pin-angle text-2xl text-orange-600 transition-all hover:bg-orange-600 hover:text-white w-10 h-10 rounded"></button>
        </div>
    );
};
