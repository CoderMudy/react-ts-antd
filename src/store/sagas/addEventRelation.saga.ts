import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { API } from "../../config"
import { AddRelationAction, addRelationSuccess, ADD_RELATION } from "../actions/addEventTargetRealtion.action"
import { GET_EVENTTYPE_DATA } from "../actions/eventTypeData.action"
import { EventTypeDataResonse } from "../models/eventType"


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


export default function* addEventRelationSaga(){
    yield takeEvery(ADD_RELATION, handleAddRelation)
}