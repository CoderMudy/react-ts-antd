import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import {History} from "history"
import ruleReducer, { RuleState } from "./rule.reducer";
import eventTargetRelationReducer, { EventTargetListState } from "./eventTargetRealtion.reducer";
import eventTargeParamReducer, { EventTargetParamsState } from "./eventTargetParam.reducer";
import eventTypeDataReducer, { EventTypeDataState } from "./eventTypeData.reducer";
import addRelationReducer, { AddRelationState } from "./addEventTargetRealtion.reducer";

export interface AppState {
    router: RouterState
    rule: RuleState,
    eventTargetList: EventTargetListState,
    eventTargetParams: EventTargetParamsState,
    eventTypeData: EventTypeDataState,
    addEventRelation: AddRelationState
}

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    rule: ruleReducer,
    eventTargetList: eventTargetRelationReducer,
    eventTargetParams: eventTargeParamReducer,
    eventTypeData: eventTypeDataReducer,
    addEventRelation: addRelationReducer

})

export default createRootReducer