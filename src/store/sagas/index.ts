import { all } from "redux-saga/effects";
import addEventRelationSaga from "./addEventRelation.saga";
import eventTargetListSaga from "./eventTargetRealtion.saga";
import eventTypeDataSaga from "./eventType.saga";
import ruleSaga from "./rule.saga";

export default function* rootSaga(){
    yield all([ruleSaga(),eventTargetListSaga(),eventTypeDataSaga(),addEventRelationSaga()])

}