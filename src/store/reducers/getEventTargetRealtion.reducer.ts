import { AddEventRelationUnitonType, ADD_RELATION, GET_RELATION_DETAIL_SUCCESS } from "../actions/eventTargetRealtion.action";
import { RelationDetail } from "../models/response/RelationDetaill";


export interface GetRelationState {
    res: RelationDetail
}


const intialState: GetRelationState = {
    res:{
        eventTypeId:-1,
        eventTargetId:-1,
        eventTypeName:"",
        eventTargetName:"",
        relation:[]
    }
}


export default function getRelationDetailReducer(
    state = intialState,
    action: AddEventRelationUnitonType
) {
    console.log("relation详情")
    switch (action.type) {
        case GET_RELATION_DETAIL_SUCCESS:
            return {
                res:action.result.data
            }
    
        default:
            return state;
    }
}