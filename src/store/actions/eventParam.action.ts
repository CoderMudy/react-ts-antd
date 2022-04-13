import { type } from "os"
import { EventTarget, EventTargetParam } from "../models/eventTarget"


export const GET_EVENTTARGET_PARAMS = "GET_EVENTTARGET_PARAMS"
export const GET_EVENTTARGET_PARAMS_SUCCESS = "GET_EVENTTARGET_PARAMS_SUCCESS"


/**
 * 获取事件目标的参数
 */
export interface GetEventTargetParamsAction {
    type: typeof GET_EVENTTARGET_PARAMS
    eventTargetId: string
}

/**
 * 成功获取到事件目标参数
 */
export interface GetEventTargetParamsSuccessAction {
    type: typeof GET_EVENTTARGET_PARAMS_SUCCESS
    targetParams: EventTargetParam[]
}


export const getEventTargetParams = (
    eventTargetId
): GetEventTargetParamsAction => ({
    type: GET_EVENTTARGET_PARAMS,
    eventTargetId
})

export const getEventTargetParamsSuccess = (
    targetParams: EventTargetParam[]
): GetEventTargetParamsSuccessAction => ({
    type: GET_EVENTTARGET_PARAMS_SUCCESS,
    targetParams
})

export type EventTargetParamUnitonType =
    | GetEventTargetParamsAction
    | GetEventTargetParamsSuccessAction

