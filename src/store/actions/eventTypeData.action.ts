import { type } from "os"
import { EventTypeData } from "../models/eventType"
// import { EventTarget, EventTargetParam } from "../models/eventTarget"


export const GET_EVENTTYPE_DATA = "GET_EVENTTYPE_DATA"
export const GET_EVENTTYPE_DATA_SUCCESS = "GET_EVENTTYPE_DATA_SUCCESS"


/**
 * 获取事件类型定义的参数
 */
export interface GetEventTypeDataAction {
    type: typeof GET_EVENTTYPE_DATA
    eventTypeId: string
}

/**
 * 成功获取到事件目标参数
 */
export interface GetEventTypeDataSuccessAction {
    type: typeof GET_EVENTTYPE_DATA_SUCCESS
    properties: EventTypeData[]
}


export const getEventTypeData = (
    eventTypeId
): GetEventTypeDataAction => ({
    type: GET_EVENTTYPE_DATA,
    eventTypeId
})

export const getEventTypeDataSuccess = (
    properties: EventTypeData[]
): GetEventTypeDataSuccessAction => ({
    type: GET_EVENTTYPE_DATA_SUCCESS,
    properties
})

export type EventTypeDataUnitonType =
    | GetEventTypeDataAction
    | GetEventTypeDataSuccessAction

