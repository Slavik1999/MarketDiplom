import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { FETCH_PROFILE, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL} from '../../constants/profile'
import {BASE_URL} from "../../../constants/constants";

export function* profileSaga(action) {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
          
        const res = yield axios.get(`${BASE_URL}api/users/profile`,
        {
            headers: headers
        }).then(res => res)

        yield put({
            type: FETCH_PROFILE_SUCCESS,
            payload: res.data
        })

    } catch (e) {
        console.log(e);
        yield put({
            type: FETCH_PROFILE_FAIL,
            payload: e.response.data.message
        })

    }
}

function* watchSignInSaga() {
    yield takeEvery(FETCH_PROFILE, profileSaga);
}

export default watchSignInSaga;
