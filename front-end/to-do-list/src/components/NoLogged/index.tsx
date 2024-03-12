import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const NoLogged = () => {
  const { dispatch } = useContext(ContextClicks);

  return (
    <div className="w-auto flex justify-center gap-3 items-center between p-5 m-auto bg-black rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-xl shadow-black">
      <p className="text-red-500 text-center text-lg">You are not logged in!</p>
      <button
        onClick={() => {
          dispatch({ type: actionsType.CLOSE_DELETE_USER });
        }}
        className="bi bi-x items-center justify-center text-2xl hover:text-red-500"
      ></button>
    </div>
  );
};
