import { ReactNode, createContext, useReducer, Dispatch } from "react";
import { PropAction, reducer } from "../reducer";

export interface PropInitialState {
    closeModelCreateTask: boolean;
}

const initialState: PropInitialState = {
    closeModelCreateTask: false,
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
