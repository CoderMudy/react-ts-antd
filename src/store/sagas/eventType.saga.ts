import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { deflate } from "zlib"
import { API } from "../../config"
import { GetEventTypeDataAction, getEventTypeDataSuccess, GET_EVENTTYPE_DATA } from "../actions/eventTypeData.action"
import { EventTypeDataResonse } from "../models/eventType"




function* handleGetEventTypeData({eventTypeId}:GetEventTypeDataAction){
    const response:EventTypeDataResonse  = yield axios.post(`${API}/eventsource/eventType/misDetail/${eventTypeId}`)
    console.log("handleGetEventTypeData",response.data)
    yield put(getEventTypeDataSuccess(response.data.data.properties))
}


export default function* eventTypeDataSaga(){
    yield takeEvery(GET_EVENTTYPE_DATA, handleGetEventTypeData)
}