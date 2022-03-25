import { Rule } from "../models/rule"

export const GET_RULES = "GET_RULES"
export const GET_RULES_SUCCESS = "GET_RULES_SUCCESS"
export const POST_RULE = "POST_RULE"



/**
 * 获取规则列表
 */
export interface GetRulesAction {
    type: typeof GET_RULES
    busName: string
}

export interface GetRulesSuccessAction {
    type: typeof GET_RULES_SUCCESS,
    rules: Rule[]
}

export const getRule = (
    busName: string = "test-bus"
): GetRulesAction => ({
    type: GET_RULES,
    busName
})

export const getRuleSuccess = (
    rules:Rule[]
):GetRulesSuccessAction => ({
    type: GET_RULES_SUCCESS,
    rules
})

/**
 * 添加规则
 */
export interface PostRuleAction {
    type: typeof POST_RULE,
    payload: Rule
}


export type RuleUnionType =
    | GetRulesAction
    | GetRulesSuccessAction
    | PostRuleAction