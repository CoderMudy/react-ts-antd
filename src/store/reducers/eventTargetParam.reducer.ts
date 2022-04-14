import { EventTargetParamUnitonType, GET_EVENTTARGET_PARAMS_SUCCESS } from "../actions/eventParam.action";
import { EventTargetParam } from "../models/eventTarget";


export interface EventTargetParamsState {
    targetParams : EventTargetParam[]
}


const intialState: EventTargetParamsState = {
    targetParams: []
}


export default function eventTargeParamReducer(
    state = intialState,
    action: EventTargetParamUnitonType
) {
    console.log("getEventTargetParam")
    switch (action.type) {
        case GET_EVENTTARGET_PARAMS_SUCCESS:
            return {
                targetParams: action.targetParams
            }
        default:
            return state;
    }
}