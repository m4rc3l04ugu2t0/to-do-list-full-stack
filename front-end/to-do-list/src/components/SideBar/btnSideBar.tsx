import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";

export const BtnSideBar = () => {
    const { dispatch } = useContext(ContextClicks);

    return (
        <button
            onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}
            className="bi bi-layout-sidebar text-3xl "
            // Adicione ícones ou texto conforme necessário
        ></button>
    );
};
