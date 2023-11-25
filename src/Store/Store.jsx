import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core"
import RootReducers from "./Reducers/RootReducers";
import rootSaga from "./Sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
    reducer: RootReducers,
    middleware:()=>[sagaMiddleware]
})
export default Store
sagaMiddleware.run(rootSaga)
