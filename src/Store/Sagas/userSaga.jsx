import { takeEvery, put } from "redux-saga/effects"
import { createUserApi,deleteUserApi,getUserApi, updateUserApi} from "../Service"
import { ADD_USER, ADD_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED } from "../Constant"

function* createuserSaga(action) {

    let response = yield createUserApi(action.payload)
    
    yield put({type:ADD_USER_RED,data:response})
}
function* getuserSaga() {
    let response = yield getUserApi()
    yield put({type:GET_USER_RED,data:response})
}
function* updateuserSaga(action) {
    yield updateUserApi(action.payload)
    yield put({type:UPDATE_USER_RED,data:action.payload})
}
function* deleteuserSaga(action) {
    yield deleteUserApi(action.payload)
    yield put({type:DELETE_USER_RED,data:action.payload})
}

export function* userSaga() {
    yield takeEvery(ADD_USER,createuserSaga)
    yield takeEvery(GET_USER,getuserSaga)
    yield takeEvery(UPDATE_USER,updateuserSaga)
    yield takeEvery(DELETE_USER,deleteuserSaga)
} 