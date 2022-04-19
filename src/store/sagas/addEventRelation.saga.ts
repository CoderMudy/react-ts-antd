import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { API } from "../../config"
import { AddRelationAction, addRelationFail, addRelationSuccess, ADD_RELATION, EditRelationAction, editRelationFail, editRelationSuccess, EDIT_RELATION, GetRelationDetailAction, getRelationDetailSuccess, GET_RELATION_DETAIL } from "../actions/eventTargetRealtion.action"
import { GET_EVENTTYPE_DATA } from "../actions/eventTypeData.action"
import { EventTypeDataResonse } from "../models/eventType"
import { CommonResonse } from "../models/response/commonResponse"
import { RelationDetailResonse } from "../models/response/RelationDetaill"
import getRelationDetailReducer from "../reducers/getEventTargetRealtion.reducer"


function* handleAddRelation({payload}:AddRelationAction){
    console.log("添加事件类型目标关系")
    try{
        const response:EventTypeDataResonse  = yield axios({
            url:`${API}/relation/misAdd`,
            method:'post',
            data: payload
        })
        console.log("添加事件类型目标关系2",response.data)

        yield put(addRelationSuccess())
    }catch(error){
        yield put(addRelationFail("[500]添加失败"))
    }
   
    
}

function* handleEditRelation({payload}:EditRelationAction){
    console.log("编辑事件类型目标关系")
    const response:CommonResonse  = yield axios({
        url:`${API}/relation/misEdit`,
        method:'post',
        data: payload
    })
    console.log("编辑事件类型目标关系",response.data)
    if(response.data.success === true){
        yield put(editRelationSuccess())
    }else{
        yield put(editRelationFail(response.data.errorMessage))
    }
    
}



function* handleGetEventRelationDetail({id}:GetRelationDetailAction){
    const response:RelationDetailResonse  = yield axios.post(`${API}/relation/detail/${id}`)
    console.log("handleGetEventRelationDetail获取关联详情",response.data)
    yield put(getRelationDetailSuccess(response.data))
}

export default function* addEventRelationSaga(){
    yield takeEvery(ADD_RELATION, handleAddRelation)
    yield takeEvery(GET_RELATION_DETAIL, handleGetEventRelationDetail)
    yield takeEvery(EDIT_RELATION, handleEditRelation)
}