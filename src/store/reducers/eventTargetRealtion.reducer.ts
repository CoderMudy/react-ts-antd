import { AddEventRelationUnitonType, ADD_RELATION, GET_RELATION_DETAIL_SUCCESS } from "../actions/eventTargetRealtion.action";


export interface AddRelationState {
    
}


const intialState: AddRelationState = {
   
}


export default function addRelationReducer(
    state = intialState,
    action: AddEventRelationUnitonType
) {
    console.log("addRelation添加")
    switch (action.type) {
        // case ADD_RELATION:
        //     return {
        //         ...state
        //     }
    
        default:
            return state;
    }
}