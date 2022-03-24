import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import {History} from "history"
import ruleReducer from "./rule.reducer";

export interface AppState {

}

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    rule: ruleReducer
})

export default createRootReducer