import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { API } from "../../config"
import { AddRelationAction, addRelationSuccess, ADD_RELATION, GetRelationDetailAction, getRelationDetailSuccess, GET_RELATION_DETAIL } from "../actions/eventTargetRealtion.action"
import { GET_EVENTTYPE_DATA } from "../actions/eventTypeData.action"
import { EventTypeDataResonse } from "../models/eventType"
import { RelationDetailResonse } from "../models/response/RelationDetaill"
import getRelationDetailReducer from "../reducers/getEventTargetRealtion.reducer"


function* handleAddRelation({payload}:AddRelationAction){
    console.log("添加事件类型目标关系")
    const response:EventTypeDataResonse  = yield axios({
        url:`${API}/relation/misAdd`,
        method:'post',
        data: payload
    })
    console.log("添加事件类型目标关系2",response.data)
    yield put(addRelationSuccess())
}



function* handleGetEventRelationDetail({id}:GetRelationDetailAction){
    const response:RelationDetailResonse  = yield axios.post(`${API}/relation/detail/${id}`)
    console.log("handleGetEventRelationDetail获取关联详情",response.data)
    yield put(getRelationDetailSuccess(response.data))
}

export default function* addEventRelationSaga(){
    yield takeEvery(ADD_RELATION, handleAddRelation)
    yield takeEvery(GET_RELATION_DETAIL, handleGetEventRelationDetail)
}