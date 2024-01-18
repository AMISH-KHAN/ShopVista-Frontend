import { takeEvery, put } from "redux-saga/effects"
import { createCheckoutApi,deleteCheckoutApi,getCheckoutApi, updateCheckoutApi} from "../Service"
import { ADD_CHECKOUT, ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constant"

function* createcheckoutSaga(action) {

    let response = yield createCheckoutApi(action.payload)
    
    yield put({type:ADD_CHECKOUT_RED,data:response})
}
function* getcheckoutSaga() {
    let response = yield getCheckoutApi()
    yield put({type:GET_CHECKOUT_RED,data:response})
}
function* updatecheckoutSaga(action) {
    yield updateCheckoutApi(action.payload)
    yield put({type:UPDATE_CHECKOUT_RED,data:action.payload})
}
function* deletecheckoutSaga(action) {
    yield deleteCheckoutApi(action.payload)
    yield put({type:DELETE_CHECKOUT_RED,data:action.payload})
}

export function* checkoutSaga() {
    yield takeEvery(ADD_CHECKOUT,createcheckoutSaga)
    yield takeEvery(GET_CHECKOUT,getcheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT,updatecheckoutSaga)
    yield takeEvery(DELETE_CHECKOUT,deletecheckoutSaga)
} 