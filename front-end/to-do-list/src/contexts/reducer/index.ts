import { PropInitialState } from "../contextClicks";
import { actionsType } from "./actionsType";

export type PropAction = {
    type: "CLOSE_EDIT_TASK";
    payload?: string;
};
export const reducer = (
    state: PropInitialState,
    action: PropAction
): PropInitialState => {
    switch (action.type) {
        case actionsType.CLOSE_EDIT_TASK:
            return {
                ...state,
                closeModelCreateTask: !state.closeModelCreateTask,
            };
        default:
            return state;
    }
};
