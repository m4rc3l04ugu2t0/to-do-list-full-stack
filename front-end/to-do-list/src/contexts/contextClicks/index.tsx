import { ReactNode, createContext, useReducer, Dispatch } from "react";
import { PropAction, reducer } from "../reducer";

export interface PropInitialState {
    closeModelCreateTask?: boolean;
    closeModelEditTask?: boolean;
    closeDeleteTask?: boolean;
    closeCreateUser?: boolean;
    closeDeleteUser?: boolean;
    payload?: string;
}

const initialState: PropInitialState = {
    closeModelCreateTask: false,
    closeModelEditTask: false,
    closeDeleteTask: false,
    closeCreateUser: false,
    closeDeleteUser: false,
};

interface ContextType {
    state: PropInitialState;
    dispatch: Dispatch<PropAction>;
}

export const ContextClicks = createContext({} as ContextType);

export const ClicksProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextClicks.Provider value={{ state, dispatch }}>
            {children}
        </ContextClicks.Provider>
    );
};
