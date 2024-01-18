import { takeEvery, put } from "redux-saga/effects"
import { createContactApi,deleteContactApi,getContactApi, updateContactApi} from "../Service"
import { ADD_CONTACT, ADD_CONTACT_RED, DELETE_CONTACT, DELETE_CONTACT_RED, GET_CONTACT, GET_CONTACT_RED, UPDATE_CONTACT, UPDATE_CONTACT_RED } from "../Constant"

function* createContactSaga(action) {
    let response = yield createContactApi(action.payload)
    yield put({type:ADD_CONTACT_RED,data:response})
}
function* getContactSaga() {
    let response = yield getContactApi()
    yield put({type:GET_CONTACT_RED,data:response})
}
function* updateContactSaga(action) {
    yield updateContactApi(action.payload)
    yield put({type:UPDATE_CONTACT_RED,data:action.payload})
}
function* deleteContactSaga(action) {
    yield deleteContactApi(action.payload)
    yield put({type:DELETE_CONTACT_RED,data:action.payload})
}

export function* contactSaga() {
    yield takeEvery(ADD_CONTACT,createContactSaga)
    yield takeEvery(GET_CONTACT,getContactSaga)
    yield takeEvery(UPDATE_CONTACT,updateContactSaga)
    yield takeEvery(DELETE_CONTACT,deleteContactSaga)
} 