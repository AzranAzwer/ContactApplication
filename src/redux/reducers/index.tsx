import { combineReducers } from "redux";
import { listReducer } from "./ListReducer";

export const rootReducer = combineReducers({
    lists: listReducer,
})

export type RootState = ReturnType<typeof rootReducer>