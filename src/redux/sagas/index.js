import { all } from "redux-saga/effects";
import signUpSaga from "./registrationSaga/signupSaga";
import signInSaga from "./registrationSaga/signinSaga";

export default function* rootSaga() {
    yield all([
        signUpSaga(),
        signInSaga(),
    ]);
}
