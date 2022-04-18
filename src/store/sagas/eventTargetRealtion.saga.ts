import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { deflate } from "zlib"
import { API } from "../../config"
import { GetEventTargetParamsAction, getEventTargetParamsSuccess, GET_EVENTTARGET_PARAMS } from "../actions/eventParam.action"
import { getEventTargetListSuccess,  GET_EVENTTARGET } from "../actions/eventTarget.action"
import { getRuleSuccess } from "../actions/rule.action"
import { EventTargetParam, EventTargetParamResonse } from "../models/eventTarget"
import { EventTargetList } from "../models/response/EventTargetList"

function* handleGetEventTarget(){
    const response:EventTargetList  = yield axios.post(`${API}/eventTarget/listAll`)
    console.log("handleGetEventTarget",response.data)
    yield put(getEventTargetListSuccess(response.data))
}

function* handleGetEventTargetParam({eventTargetId}:GetEventTargetParamsAction){
    const response:EventTargetParamResonse  = yield axios.post(`${API}/eventTarget/detail/${eventTargetId}`)
    console.log("handleGetEventTargetParam",response.data)
    yield put(getEventTargetParamsSuccess(response.data.data.httpParams))
}


export default function* eventTargetListSaga(){
    yield takeEvery(GET_EVENTTARGET_PARAMS, handleGetEventTargetParam)
    yield takeEvery(GET_EVENTTARGET, handleGetEventTarget)
}