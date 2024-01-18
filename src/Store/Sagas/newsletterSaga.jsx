import { takeEvery, put } from "redux-saga/effects"
import { createNewsletterApi,deleteNewsletterApi,getNewsletterApi, updateNewsletterApi} from "../Service"
import { ADD_NEWSLETTER, ADD_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER, UPDATE_NEWSLETTER_RED } from "../Constant"

function* createNewsletterSaga(action) {
    let response = yield createNewsletterApi(action.payload)
    yield put({type:ADD_NEWSLETTER_RED,data:response})
}
function* getNewsletterSaga() {
    let response = yield getNewsletterApi()
    yield put({type:GET_NEWSLETTER_RED,data:response})
}
function* updateNewsletterSaga(action) {
    yield updateNewsletterApi(action.payload)
    yield put({type:UPDATE_NEWSLETTER_RED,data:action.payload})
}
function* deleteNewsletterSaga(action) {
    yield deleteNewsletterApi(action.payload)
    yield put({type:DELETE_NEWSLETTER_RED,data:action.payload})
}

export function* newsletterSaga() {
    yield takeEvery(ADD_NEWSLETTER,createNewsletterSaga)
    yield takeEvery(GET_NEWSLETTER,getNewsletterSaga)
    yield takeEvery(UPDATE_NEWSLETTER,updateNewsletterSaga)
    yield takeEvery(DELETE_NEWSLETTER,deleteNewsletterSaga)
} 