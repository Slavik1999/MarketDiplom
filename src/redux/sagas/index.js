import { all } from "redux-saga/effects";
import signinSaga from "./registrationSaga/signinSaga";

export default function* rootSaga() {
    yield all([
        signinSaga(),
    ]);
}
