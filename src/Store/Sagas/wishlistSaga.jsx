import { takeEvery, put } from "redux-saga/effects"
import { createWishlistApi,deleteWishlistApi,getWishlistApi, updateWishlistApi} from "../Service"
import { ADD_WISHLIST, ADD_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED } from "../Constant"

function* createwishlistSaga(action) {

    let response = yield createWishlistApi(action.payload)
    
    yield put({type:ADD_WISHLIST_RED,data:response})
}
function* getwishlistSaga() {
    let response = yield getWishlistApi()
    yield put({type:GET_WISHLIST_RED,data:response})
}
function* updatewishlistSaga(action) {
    yield updateWishlistApi(action.payload)
    yield put({type:UPDATE_WISHLIST_RED,data:action.payload})
}
function* deletewishlistSaga(action) {
    yield deleteWishlistApi(action.payload)
    yield put({type:DELETE_WISHLIST_RED,data:action.payload})
}

export function* wishlistSaga() {
    yield takeEvery(ADD_WISHLIST,createwishlistSaga)
    yield takeEvery(GET_WISHLIST,getwishlistSaga)
    yield takeEvery(UPDATE_WISHLIST,updatewishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deletewishlistSaga)
} 