import { useContext } from "react";
import { ContextClicks } from "../../contexts/contextClicks";
import { useDeleteUser } from "../../services/mutations";
import { GenericComponents } from "../GenericComponents";

export const DeleteUser = () => {
  const taskDeleteUser = useDeleteUser();
  const { state, dispatch } = useContext(ContextClicks);

  const handleDeleteUser = () => {
    taskDeleteUser.mutate(localStorage.getItem("userId")!);
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    dispatch({ type: "CLOSE_DELETE_USER" });
    dispatch({ type: "CLOSE_CREATE_USER" });
  };
  return (
    <GenericComponents.Div
      className={`${
        state.closeDeleteUser ? "flex" : "hidden"
      } flex-col w-64 md:w-96 bg-black gap-5 items-center px-7 py-5 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
    >
      <GenericComponents.P>
        Do you want to delete your user? with this all your tasks will be
        deleted!
      </GenericComponents.P>
      <GenericComponents.Div className="flex gap-3">
        <GenericComponents.Button
          onClick={handleDeleteUser}
          className="bg-green-500 px-5 py-2 rounded"
        >
          Yes
        </GenericComponents.Button>
        <GenericComponents.Button
          onClick={() => {
            dispatch({ type: "CLOSE_DELETE_USER" });
            dispatch({ type: "CLOSE_CREATE_USER" });
          }}
          className="bg-red-500 px-5 py-2 rounded"
        >
          No
        </GenericComponents.Button>
      </GenericComponents.Div>
    </GenericComponents.Div>
  );
};
