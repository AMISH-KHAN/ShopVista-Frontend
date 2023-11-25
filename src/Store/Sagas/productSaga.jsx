import { takeEvery, put } from "redux-saga/effects"
import { createProductApi,deleteProductApi,getProductApi, updateProductApi} from "../Service"
import { ADD_PRODUCT, ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant"

function* createproductSaga(action) {

    let response = yield createProductApi(action.payload)
    
    yield put({type:ADD_PRODUCT_RED,data:response})
}
function* getproductSaga() {
    let response = yield getProductApi()
    yield put({type:GET_PRODUCT_RED,data:response})
}
function* updateproductSaga(action) {
    yield updateProductApi(action.payload)
    yield put({type:UPDATE_PRODUCT_RED,data:action.payload})
}
function* deleteproductSaga(action) {
    yield deleteProductApi(action.payload)
    yield put({type:DELETE_PRODUCT_RED,data:action.payload})
}

export function* productSaga() {
    yield takeEvery(ADD_PRODUCT,createproductSaga)
    yield takeEvery(GET_PRODUCT,getproductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateproductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteproductSaga)
} 