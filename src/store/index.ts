import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import {createHashHistory} from "history"
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './sagas'


export const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history),sagaMiddleware)
    )
)
  
sagaMiddleware.run(rootSaga)

export default store