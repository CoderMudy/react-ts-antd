import { AddEventRelationUnitonType, ADD_RELATION, EDIT_RELATION, EDIT_RELATION_FAIL, EDIT_RELATION_SUCCESS, GET_RELATION_DETAIL_SUCCESS } from "../actions/eventTargetRealtion.action";


export interface RelationState {
    add: {
        loaded: boolean,
        success: boolean,
        message: string
    }
    edit: {
        loaded: boolean,
        success: boolean,
        message: string
    }
}


const intialState: RelationState = {
    add: {
        loaded: false,
        success: false,
        message: ""
    },
    edit: {
        loaded: false,
        success: false,
        message: ""
    }
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
        case EDIT_RELATION:
            return {
                ...state,
                edit: {
                    loaded: false,
                    success: false
                }
            }
        case EDIT_RELATION_FAIL:
            return {
                ...state,
                edit: {
                    loaded: true,
                    success: false,
                    message: action.message
                }
            }
        case EDIT_RELATION_SUCCESS:
            return {
                ...state,
                edit: {
                    loaded: true,
                    success: true
                }
            }

        default:
            return state;
    }
}