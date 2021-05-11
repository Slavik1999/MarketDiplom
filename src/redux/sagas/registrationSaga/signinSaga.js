import { call, put, takeEvery } from "redux-saga/effects";
import { postApi } from "../shared/postApi";
import * as type from "../../constants/types";
import { TypedIterableIterator } from "../../../interfaces/interfaces";
import { LoginAction } from "../../../interfaces/actions-interfaces/registration-interfaces";

function* signinSaga(action: {
    type: string;
    payload: LoginAction;
}): TypedIterableIterator<any, any, number> {
    console.log("signinaction", action);
    try {
        const endpoint = "auth/signIn";
        const userData = yield call(postApi, [
            action.payload.logindata,
            endpoint,
        ]);
        console.log("status", userData);
        if (userData.status >= 200 && userData.status < 300) {
            yield put({ type: type.GET_USERS_SUC, userdata: userData.data });
            console.log(userData);
            localStorage.setItem("token", userData.data.token);
            localStorage.setItem("refreshToken", userData.data.refreshToken);
            localStorage.setItem("expiredTime", userData.data.expiredTime);
            action.payload.history.push("/marketplace");
        } else {
            throw userData;
        }
    } catch (e) {
        console.log("err", e.response.data.error);
        yield put({
            type: type.GET_USERS_FAILED,
            message: e.response.data.error,
        });
    }
}

function* watchSignInSaga() {
    yield takeEvery(type.GET_SIGNIN_REQ, signinSaga);
}

export default watchSignInSaga;
