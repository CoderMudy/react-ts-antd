import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import {History} from "history"
import ruleReducer, { RuleState } from "./rule.reducer";
import eventTargetRelationReducer, { EventTargetListState } from "./eventTargetList.reducer";
import eventTargeParamReducer, { EventTargetParamsState } from "./eventTargetParam.reducer";
import eventTypeDataReducer, { EventTypeDataState } from "./eventTypeData.reducer";
import addRelationReducer, { RelationState } from "./eventTargetRealtion.reducer";
import getRelationDetailReducer, { GetRelationState } from "./getEventTargetRealtion.reducer";
import { RelationDetail } from "../models/response/RelationDetaill";

export interface AppState {
    router: RouterState
    rule: RuleState,
    eventTargetList: EventTargetListState,
    eventTargetParams: EventTargetParamsState,
    eventTypeData: EventTypeDataState,
    addEventRelation: RelationState,
    editEventRelation: RelationState,
    getRelationDetail: GetRelationState
}

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    rule: ruleReducer,
    eventTargetList: eventTargetRelationReducer,
    eventTargetParams: eventTargeParamReducer,
    eventTypeData: eventTypeDataReducer,
    addEventRelation: addRelationReducer,
    editEventRelation: addRelationReducer,
    getRelationDetail: getRelationDetailReducer

})

export default createRootReducer