import { all } from "redux-saga/effects";
import { maincategorySaga } from "./maincategorySaga";
import { subcategorySaga } from "./subcategorySaga";
import { brandSaga } from "./brandSaga";
import { productSaga } from "./productSaga";

export default function* rootSaga() {
    yield all([maincategorySaga(),subcategorySaga(),brandSaga(),productSaga()])
}