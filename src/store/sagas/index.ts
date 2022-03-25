import { all } from "redux-saga/effects";
import ruleSaga from "./rule.saga";

export default function* rootSaga(){
    yield all([ruleSaga()])
}