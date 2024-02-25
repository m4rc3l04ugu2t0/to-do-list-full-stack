import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const BtnEditTask = ({ onclick }: { onclick: () => void }) => {
    const { dispatch } = useContextClick();

    return (
        <button
            className="bi bi-pencil text-2xl text-blue-500 w-10 h-10 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={() => {
                dispatch({ type: actionsType.CLOSE_EDIT_TASK });

                onclick();
            }}
        ></button>
    );
};
