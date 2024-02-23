import { CSSProperties, useState } from "react";
import { BtnSideBar } from "./btnSideBar";

export const SideBar = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false); // Estado para controlar a visibilidade
    const styleBtnSideBar: CSSProperties = {
        position: "absolute",
        top: "0",
        left: "0",
        margin: "0.4rem",
    };

    return (
        <div
            data-isopen={toggleSideBar}
            style={{
                transition: "width 0.5s ease-in-out",
                width: toggleSideBar ? "33%" : "0",
                padding: toggleSideBar ? "0.5rem" : "0", // Ajuste '20rem' para a largura desejada do menu aberto
                overflow: "hidden",
            }}
            className={`w-2/6 max-w-80 h-dvh bg-zinc-800 flex flex-col gap-4 transition duration-300`}
            // Adicione ou ajuste classes aqui para personalizar o estilo
        >
            <div
                style={toggleSideBar ? {} : styleBtnSideBar}
                className="flex flex-col border-b-2 border-zinc-600"
            >
                <BtnSideBar setToggleSideBar={setToggleSideBar} />
            </div>
            <ul
                style={
                    toggleSideBar ? { display: "flex" } : { display: "none" }
                }
                className="flex-col gap-6"
            >
                <li className="text-lg flex justify-center items-center gap-2 md:text-3xl border-b-2 border-zinc-600">
                    <i className="bi bi-search"></i> Search
                </li>
                <li className="text-lg flex justify-center items-center gap-2 md:text-3xl border-b-2 border-zinc-600">
                    <i className="bi bi-list"></i> List
                </li>
                <li className="text-lg flex justify-center items-center gap-2 md:text-3xl border-b-2 border-zinc-600">
                    <i className="bi bi-plus"></i> Add
                </li>
                <li className="text-lg flex justify-center items-center gap-2 md:text-3xl border-b-2 border-zinc-600">
                    <i className="bi bi-pencil"></i> Edit
                </li>
                <li className="text-lg flex justify-center items-center gap-2 md:text-3xl border-b-2 border-zinc-600">
                    <i className="bi bi-trash"></i> Delete
                </li>
                <li className="text-lg flex justify-center items-center gap-2 md:text-3xl border-b-2 border-zinc-600">
                    <i className="bi bi-gear"></i> Settings
                </li>
            </ul>
        </div>
    );
};
