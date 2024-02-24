import { useContextClick } from "../../contexts/contextClicks/useContextClicks";

export const ButtonCreateTask = ({ className }: { className?: string }) => {
    const { dispatch } = useContextClick();

    return (
        <div className={className}>
            {" "}
            <button
                className="bg-transparent bg-slate-600 rounded bi bi-plus-lg text-3xl"
                onClick={() => dispatch({ type: "CLOSE_EDIT_TASK" })}
            ></button>
        </div>
    );
};
