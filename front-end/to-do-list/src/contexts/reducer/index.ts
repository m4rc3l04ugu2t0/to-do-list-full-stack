import { PropInitialState } from "../contextClicks";
import { actionsType } from "./actionsType";

export type PropAction = {
    type:
        | "CLOSE_EDIT_TASK"
        | "CLOSE_DELETE_TASK"
        | "CLOSE_CREATE_TASK"
        | "UPDATE_TASK";
};
export const reducer = (
    state: PropInitialState,
    action: PropAction
): PropInitialState => {
    switch (action.type) {
        case actionsType.CLOSE_CREATE_TASK:
            return {
                ...state,
                closeModelCreateTask: !state.closeModelCreateTask,
            };
        case actionsType.CLOSE_EDIT_TASK:
            return {
                ...state,
                closeModelEditTask: !state.closeModelEditTask,
            };
        case actionsType.CLOSE_DELETE_TASK:
            return {
                ...state,
                closeDeleteTask: !state.closeDeleteTask,
            };
        default:
            return state;
    }
};
