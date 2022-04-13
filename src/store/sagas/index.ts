import { all } from "redux-saga/effects";
import eventTargetListSaga from "./eventTargetRealtion.saga";
import ruleSaga from "./rule.saga";

export default function* rootSaga(){
    yield all([ruleSaga(),eventTargetListSaga()])
}