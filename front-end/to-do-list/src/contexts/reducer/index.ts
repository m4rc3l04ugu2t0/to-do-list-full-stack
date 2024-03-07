import { PropInitialState } from "../contextClicks";
import { actionsType } from "./actionsType";

export type PropAction = {
    type:
        | "CLOSE_EDIT_TASK"
        | "CLOSE_DELETE_TASK"
        | "CLOSE_CREATE_TASK"
        | "UPDATE_TASK"
        | "CLOSE_CREATE_USER"
        | "CLOSE_DELETE_USER"
        | "CHECK_TASK"
        | "CLOSE_LOGIN_USER"
        | "CLOSE_SIDEBAR";
    payload?: string;
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
        case actionsType.CLOSE_CREATE_USER:
            return {
                ...state,
                closeCreateUser: !state.closeCreateUser,
            };
        case actionsType.CLOSE_DELETE_USER:
            return {
                ...state,
                closeDeleteUser: !state.closeDeleteUser,
            };
        case actionsType.CHECK_TASK:
            return {
                ...state,
                checkTask: !state.checkTask,
                payload: action.payload,
            };
        case actionsType.CLOSE_LOGIN_USER:
            return {
                ...state,
                closeLoginUser: !state.closeLoginUser,
            };
        case actionsType.CLOSE_SIDEBAR:
            return {
                ...state,
                closeSidebar: !state.closeSidebar,
            };
        default:
            return state;
    }
};
