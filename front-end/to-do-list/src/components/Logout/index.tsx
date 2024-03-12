import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const Logout = () => {
  const { dispatch } = useContext(ContextClicks);

  return (
    <div className="w-1/3 flex justify-center flex-col items-center p-4 m-auto bg-black rounded absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-xl shadow-black">
      <button
        onClick={() => {
          dispatch({ type: actionsType.CLOSE_LOGOUT });
        }}
        className="w-full h-5 flex items-center justify-end  text-2xl hover:text-red-500"
      >
        <p className="bi bi-x"></p>
      </button>
      <small className="text-red-500 text-center  text-lg">
        You are logged out!
      </small>
    </div>
  );
};
