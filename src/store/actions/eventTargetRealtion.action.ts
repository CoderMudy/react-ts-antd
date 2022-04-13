import { type } from "os"
import { EventTarget, EventTargetParam } from "../models/eventTarget"

export const GET_EVENTTARGET = "GET_EVENTTARGET_LIST"
export const GET_EVENTTARGET_SUCCESS = "GET_EVENTTARGET_LIST_SUCCESS"


/**
 * 获取事件目标列表
 */
export interface GetEventTargetListAction {
    type: typeof GET_EVENTTARGET
}

/**
 * 成功获取到事件目标列表
 */
export interface GetEventTargetListSuccessAction {
    type: typeof GET_EVENTTARGET_SUCCESS
    targets: EventTarget[]
}

/**
 * 
 * @returns 
 */
export const getEventTargetList = (): GetEventTargetListAction =>({
    type: GET_EVENTTARGET
})

export const getEventTargetListSuccess = (
    targets:EventTarget[]
): GetEventTargetListSuccessAction =>({
    type: GET_EVENTTARGET_SUCCESS,
    targets
})



export type EventTargetUnitonType = 
    | GetEventTargetListAction
    | GetEventTargetListSuccessAction


