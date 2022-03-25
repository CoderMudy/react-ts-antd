import axios from "axios";
import { API } from "../../config";
import { GetRulesAction, getRuleSuccess, GET_RULES } from "../actions/rule.action";
import {put,take,takeEvery} from "redux-saga/effects"
import { RuleListResult } from "../models/response/RuleList";

function* handleGetRules({busName}: GetRulesAction){
    const response:RuleListResult  = yield axios.post(`${API}/rule/listRule/${busName}`)
    console.log("handleGetRules",response.data)
    yield put(getRuleSuccess(response.data))
}


export default function* ruleSaga(){
    yield takeEvery(GET_RULES,handleGetRules)
}