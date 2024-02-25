import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const BtnDeleteTask = ({ onclick }: { onclick: () => void }) => {
    const { dispatch } = useContextClick();
    return (
        <button
            className="bi bi-trash text-2xl text-red-500 w-10 h-10 rounded hover:bg-red-500 hover:text-white transition duration-300"
            onClick={() => {
                dispatch({ type: actionsType.CLOSE_DELETE_TASK });
                onclick();
            }}
        ></button>
    );
};
