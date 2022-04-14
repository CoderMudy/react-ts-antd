import { type } from "os"
import { EventTarget, EventTargetParam } from "../models/eventTarget"

export const ADD_RELATION = "ADD_RELATIONT"
export const ADD_RELATION_SUCCESS = "ADD_RELATION_SUCCESS"
export const ADD_RELATION_FAIL = "ADD_RELATION_FAIL"

export interface AddRelationPayload{
    // eventTypeId: string,
    // eventTargetId: string,
    // relation: []
}


/**
 * 添加投递关系
 */
export interface AddRelationAction {
    type: typeof ADD_RELATION
    payload: AddRelationPayload
}

/**
 * 添加成功
 */
export interface AddRelationSuccessAction {
    type: typeof ADD_RELATION_SUCCESS
}

export interface AddRelationFailAction {
    type: typeof ADD_RELATION_FAIL
    message: string
}

/**
 * 
 * @returns 
 */
export const addRelation = (payload: AddRelationPayload): AddRelationAction =>({
    type: ADD_RELATION,
    payload
})

export const addRelationSuccess = (): AddRelationSuccessAction =>({
    type: ADD_RELATION_SUCCESS,
})

export const addRelationFail = (message): AddRelationFailAction =>({
    type: ADD_RELATION_FAIL,
    message
})

export type AddEventRelationUnitonType = 
    | AddRelationAction
    | AddRelationSuccessAction
    | AddRelationFailAction


