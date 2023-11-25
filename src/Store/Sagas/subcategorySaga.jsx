import { takeEvery, put } from "redux-saga/effects"
import { createSubcategoryApi,deleteSubcategoryApi,getSubcategoryApi, updateSubcategoryApi} from "../Service"
import { ADD_SUBCATEGORY, ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from "../Constant"

function* createSubcategorySaga(action) {
    let response = yield createSubcategoryApi(action.payload)
    yield put({type:ADD_SUBCATEGORY_RED,data:response})
}
function* getSubcategorySaga() {
    let response = yield getSubcategoryApi()
    yield put({type:GET_SUBCATEGORY_RED,data:response})
}
function* updateSubcategorySaga(action) {
    yield updateSubcategoryApi(action.payload)
    yield put({type:UPDATE_SUBCATEGORY_RED,data:action.payload})
}
function* deleteSubcategorySaga(action) {
    yield deleteSubcategoryApi(action.payload)
    yield put({type:DELETE_SUBCATEGORY_RED,data:action.payload})
}

export function* subcategorySaga() {
    yield takeEvery(ADD_SUBCATEGORY,createSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY,getSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSubcategorySaga)
} 