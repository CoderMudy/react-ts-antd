import { GET_RULES, POST_RULE, RuleUnionType } from "../actions/rule.action"

export interface RuleState{
    rules:{
        loaded: boolean,
        success: boolean,
        message: string
    }
    addRule:{
        loaded: boolean,
        success: boolean,
        message: string
    }
}

const intialState: RuleState = {
    rules: {
        loaded: false,
        success: false,
        message: ""
    },
    addRule: {
        loaded: false,
        success: false,
        message: ""
    }
}


export default function ruleReducer(state = intialState,
    action: RuleUnionType
    ){
        switch (action.type) {
            case GET_RULES:
                return{
                    ...state,
                    rules:{
                        loaded: true,
                        success: true
                    }  
                }
            case POST_RULE:
                return{
                    ...state,
                    addRule:{
                        loaded: true,
                        success: true
                    }  
                }

            default:
                return state;
        }
    
}