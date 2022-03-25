import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import {History} from "history"
import ruleReducer, { RuleState } from "./rule.reducer";

export interface AppState {
    router: RouterState
    rule: RuleState
}

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    rule: ruleReducer
})

export default createRootReducer