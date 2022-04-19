import { type } from "os"
import { EventTarget, EventTargetParam } from "../models/eventTarget"
import { RelationDetail, RelationDetailResonse } from "../models/response/RelationDetaill"

export const ADD_RELATION = "ADD_RELATIONT"
export const ADD_RELATION_SUCCESS = "ADD_RELATION_SUCCESS"
export const ADD_RELATION_FAIL = "ADD_RELATION_FAIL"

export const GET_RELATION_DETAIL = "GET_RELATION_DETAIL"
export const GET_RELATION_DETAIL_SUCCESS = "GET_RELATION_DETAIL_SUCCESS"

export const EDIT_RELATION = "EDIT_RELATIONT"
export const EDIT_RELATION_SUCCESS = "EDIT_RELATION_SUCCESS"
export const EDIT_RELATION_FAIL = "EDIT_RELATION_FAIL"


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


/**
 * 查看投递关系详情
 */



export interface GetRelationDetailAction {
    type: typeof GET_RELATION_DETAIL
    id: number
}

export interface GetRelationDetailSuccessAction {
    type: typeof GET_RELATION_DETAIL_SUCCESS
    result: RelationDetailResonse
}

export const getRelationDetail = (id: number) : GetRelationDetailAction => ({
    type: GET_RELATION_DETAIL,
    id
})


export const getRelationDetailSuccess = (result) : GetRelationDetailSuccessAction => ({
    type: GET_RELATION_DETAIL_SUCCESS,
    result 
})


/**
 * 编辑投递关系
 */
 export interface EditRelationAction {
    type: typeof EDIT_RELATION
    payload: AddRelationPayload
}

/**
 * 编辑成功
 */
export interface EditRelationSuccessAction {
    type: typeof EDIT_RELATION_SUCCESS
}

/**
 * 编辑失败
 */
export interface EditRelationFailAction {
    type: typeof EDIT_RELATION_FAIL
    message: string
}


/**
 * 
 * @returns 
 */
export const editRelation = (payload: AddRelationPayload): EditRelationAction =>({
    type: EDIT_RELATION,
    payload
})

export const editRelationSuccess = (): EditRelationSuccessAction =>({
    type: EDIT_RELATION_SUCCESS,
})

export const editRelationFail = (message): EditRelationFailAction =>({
    type: EDIT_RELATION_FAIL,
    message
})



export type AddEventRelationUnitonType = 
    | AddRelationAction
    | AddRelationSuccessAction
    | AddRelationFailAction
    | GetRelationDetailAction
    | GetRelationDetailSuccessAction
    | EditRelationAction
    | EditRelationSuccessAction
    | EditRelationFailAction


