import { CSSProperties, useContext } from "react";
import { BtnSideBar } from "./btnSideBar";
import { ContextClicks } from "../../contexts/contextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const SideBar = () => {
  const { state, dispatch } = useContext(ContextClicks);
  const styleBtnSideBar: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    margin: "0.4rem",
  };

  return (
    <div
      data-isopen={state.closeSidebar}
      style={{
        transition: "width 0.5s ease-in-out",
        width: state.closeSidebar ? "33%" : "0",
        padding: state.closeSidebar ? "0.5rem" : "0", // Ajuste '20rem' para a largura desejada do menu aberto
        overflow: "hidden",
      }}
      className={`w-2/6 max-w-80 h-dvh bg-zinc-950 flex flex-col gap-4 transition duration-300 shadow-2xl shadow-black`}
      // Adicione ou ajuste classes aqui para personalizar o estilo
    >
      <div
        style={state.closeSidebar ? {} : styleBtnSideBar}
        className="flex border-b-2 justify-between border-zinc-600 gap-3 items-center"
      >
        <div className="flex gap-3 items-center overflow-hidden">
          {"  "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="image profile"
            className="w-8 h-8 rounded-full"
          />
          {
            <button
              onClick={() => {
                dispatch({
                  type: actionsType.CLOSE_CREATE_USER,
                });
              }}
              className={` whitespace-no-wrap hidden md:block`}
            >
              {"  "}
              {localStorage.getItem("userName") ?? "Login"}
            </button>
          }
        </div>
        <BtnSideBar />
      </div>

      <ul
        className={`${state.closeSidebar ? "flex" : "hidden"} flex-col gap-6`}
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
