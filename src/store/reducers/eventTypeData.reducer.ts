import { EventTypeDataUnitonType, GET_EVENTTYPE_DATA_SUCCESS } from "../actions/eventTypeData.action";
import { EventTypeData } from "../models/eventType";



export interface EventTypeDataState {
    properties 
}


const intialState: EventTypeDataState = {
    properties: []
}


export default function eventTypeDataReducer(
    state = intialState,
    action: EventTypeDataUnitonType
) {
    console.log("getEventTargetParam")
    switch (action.type) {
        case GET_EVENTTYPE_DATA_SUCCESS:
            return {
                properties: action.properties
            }
        default:
            return state;
    }
}