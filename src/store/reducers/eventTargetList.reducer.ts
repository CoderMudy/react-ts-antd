import { EventTargetUnitonType, getEventTargetList, GET_EVENTTARGET_SUCCESS } from "../actions/eventTarget.action";
import { EventTarget } from "../models/eventTarget";

export interface EventTargetListState {
    targets
}


const intialState: EventTargetListState = {
    targets: []
}


export default function eventTargetRelationReducer(
    state = intialState,
    action: EventTargetUnitonType
) {
    console.log("?getEventTargetList")
    switch (action.type) {
        case GET_EVENTTARGET_SUCCESS:
            return {
                targets: action.targets
            }
    
        default:
            return state;
    }
}