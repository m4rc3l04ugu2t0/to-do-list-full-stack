import { useContextClick } from "../../contexts/contextClicks/useContextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const ButtonCreateTask = ({ className }: { className?: string }) => {
    const { dispatch } = useContextClick();

    return (
        <div className={className}>
            {" "}
            <button
                className="bg-transparent bg-slate-600 rounded bi bi-plus-lg text-3xl"
                onClick={() =>
                    dispatch({ type: actionsType.CLOSE_CREATE_TASK })
                }
            ></button>
        </div>
    );
};
