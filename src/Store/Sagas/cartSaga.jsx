import { takeEvery, put } from "redux-saga/effects"
import { createCartApi,deleteCartApi,getCartApi, updateCartApi} from "../Service"
import {
    ADD_CART, ADD_CART_RED, DELETE_CART, DELETE_CART_RED, GET_CART, GET_CART_RED, UPDATE_CART, UPDATE_CART_RED} from "../Constant"

function* createcartSaga(action) {

    let response = yield createCartApi(action.payload)
    
    yield put({type:ADD_CART_RED,data:response})
}
function* getcartSaga() {
    let response = yield getCartApi()
    yield put({type:GET_CART_RED,data:response})
}
function* updatecartSaga(action) {
    console.log("saga",action)
    yield updateCartApi(action.payload)
    yield put({type:UPDATE_CART_RED,data:action.payload})
}
function* deletecartSaga(action) {
    yield deleteCartApi(action.payload)
    yield put({type:DELETE_CART_RED,data:action.payload})
}

export function* cartSaga() {
    yield takeEvery(ADD_CART,createcartSaga)
    yield takeEvery(GET_CART,getcartSaga)
    yield takeEvery(UPDATE_CART,updatecartSaga)
    yield takeEvery(DELETE_CART,deletecartSaga)
} 