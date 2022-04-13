import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import {History} from "history"
import ruleReducer, { RuleState } from "./rule.reducer";
import eventTargetRelationReducer, { EventTargetListState } from "./eventTargetRealtion.reducer";
import { EventTargetParam } from "../models/eventTarget";
import eventTargeParamReducer, { EventTargetParamsState } from "./eventTargetParam.reducer";

export interface AppState {
    router: RouterState
    rule: RuleState,
    eventTargetList: EventTargetListState,
    eventTargetParams: EventTargetParamsState,
}

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    rule: ruleReducer,
    eventTargetList: eventTargetRelationReducer,
    eventTargetParams: eventTargeParamReducer
})

export default createRootReducer