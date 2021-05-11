import axios from "axios";
import { takeEvery } from "redux-saga/effects";
import {SIGN_UP} from "../../constants/types";

function* signinSaga(action) {
    try {
        console.log(action);
        const res = yield axios.post('https://afternoon-waters-64991.herokuapp.com/api/auth/registration', action.payload);
        console.log(res)
        // if (userData.status >= 200 && userData.status < 300) {
        //     yield put({ type: type.GET_USERS_SUC, userdata: userData.data });
        //     console.log(userData);
        //     localStorage.setItem("token", userData.data.token);
        //     localStorage.setItem("refreshToken", userData.data.refreshToken);
        //     localStorage.setItem("expiredTime", userData.data.expiredTime);
        //     action.payload.history.push("/marketplace");
        // } else {
        //     throw userData;
        // }
    } catch (e) {
        console.log("err", e);
        // yield put({
        //     type: type.GET_USERS_FAILED,
        //     message: e.response.data.error,
        // });
    }
}

function* watchSignInSaga() {
    yield takeEvery(SIGN_UP, signinSaga);
}

export default watchSignInSaga;
