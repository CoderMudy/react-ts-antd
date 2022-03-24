import { Rule } from "../rule"

export interface RuleList {
    success: boolean,
    data: Rule[]
    errorCode: string
    errorMessage: string
}