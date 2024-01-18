import { all } from "redux-saga/effects";
import { maincategorySaga } from "./maincategorySaga";
import { subcategorySaga } from "./subcategorySaga";
import { brandSaga } from "./brandSaga";
import { productSaga } from "./productSaga";
import { userSaga } from "./userSaga";
import { cartSaga } from "./cartSaga";
import { wishlistSaga } from "./wishlistSaga";
import { checkoutSaga } from "./checkoutSaga";
import { contactSaga } from "./contactSaga";
import { newsletterSaga } from "./newsletterSaga";

export default function* rootSaga() {
    yield all([maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga(),
        userSaga(),
        cartSaga(),
        wishlistSaga(),
        checkoutSaga(),
        contactSaga(),
        newsletterSaga()
    ])
}