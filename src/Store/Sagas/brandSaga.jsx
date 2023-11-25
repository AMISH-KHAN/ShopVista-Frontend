import { takeEvery, put } from "redux-saga/effects"
import { createBrandApi,deleteBrandApi,getBrandApi, updateBrandApi} from "../Service"
import { ADD_BRAND, ADD_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constant"

function* createbrandSaga(action) {

    let response = yield createBrandApi(action.payload)
    
    yield put({type:ADD_BRAND_RED,data:response})
}
function* getbrandSaga() {
    let response = yield getBrandApi()
    yield put({type:GET_BRAND_RED,data:response})
}
function* updatebrandSaga(action) {
    yield updateBrandApi(action.payload)
    yield put({type:UPDATE_BRAND_RED,data:action.payload})
}
function* deletebrandSaga(action) {
    yield deleteBrandApi(action.payload)
    yield put({type:DELETE_BRAND_RED,data:action.payload})
}

export function* brandSaga() {
    yield takeEvery(ADD_BRAND,createbrandSaga)
    yield takeEvery(GET_BRAND,getbrandSaga)
    yield takeEvery(UPDATE_BRAND,updatebrandSaga)
    yield takeEvery(DELETE_BRAND,deletebrandSaga)
} 