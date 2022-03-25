import { GET_RULES, POST_RULE, RuleUnionType,GET_RULES_SUCCESS } from "../actions/rule.action"
import { Rule } from "../models/rule"

export interface RuleState {
    rules:  Rule[],
    addRule: {
        loaded: boolean,
        success: boolean,
        message: string
    }
}

const intialState: RuleState = {
    rules: [],
    addRule: {
        loaded: false,
        success: false,
        message: ""
    }
}


export default function ruleReducer(state = intialState,
    action: RuleUnionType
) {
    switch (action.type) {
        case GET_RULES_SUCCESS:
            return {
                // ...state,
                rules: action.rules
            }
        case POST_RULE:
            return {
                // ...state,
                addRule: {
                    loaded: true,
                    success: true
                }
            }

        default:
            return state;
    }

}