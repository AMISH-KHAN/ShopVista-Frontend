import { takeEvery, put } from "redux-saga/effects"
import { createMaincategoryApi,deleteMaincategoryApi,getMaincategoryApi, updateMaincategoryApi} from "../Service"
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant"

function* createMaincategorySaga(action) {
    let response = yield createMaincategoryApi(action.payload)
    yield put({type:ADD_MAINCATEGORY_RED,data:response})
}
function* getMaincategorySaga() {
    let response = yield getMaincategoryApi()
    yield put({type:GET_MAINCATEGORY_RED,data:response})
}
function* updateMaincategorySaga(action) {
    yield updateMaincategoryApi(action.payload)
    yield put({type:UPDATE_MAINCATEGORY_RED,data:action.payload})
}
function* deleteMaincategorySaga(action) {
    yield deleteMaincategoryApi(action.payload)
    yield put({type:DELETE_MAINCATEGORY_RED,data:action.payload})
}

export function* maincategorySaga() {
    yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
} 