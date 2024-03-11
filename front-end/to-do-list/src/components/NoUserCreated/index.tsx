import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { actionsType } from "../../contexts/reducer/actionsType";

export const NoUserCreated = () => {
  const { dispatch } = useContext(ContextClicks);
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex items-center text-3xl gap-4">
        <button
          onClick={() => dispatch({ type: actionsType.CLOSE_CREATE_USER })}
          className="text-2xl hover:text-neutral-500"
        >
          Login in :)
        </button>
      </div>
    </div>
  );
};
