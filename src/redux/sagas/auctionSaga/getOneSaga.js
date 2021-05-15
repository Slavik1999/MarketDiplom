import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";
import {GET_ONE_AUCTION_REQ, GET_ONE_AUCTION_SUCCESS, GET_ONE_AUCTION_FAILED} from '../../constants/auctions'

export function* getOneSaga(action) {
    try {
        console.log(action)
        const res = yield axios.get('https://afternoon-waters-64991.herokuapp.com/api/auctions/1')
            .then(res => res)
        yield put({
            type: GET_ONE_AUCTION_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        console.log(e);
        yield put({
            type: GET_ONE_AUCTION_FAILED,
            payload: e.message
        })
        // yield put({
        //     type: type.GET_USERS_FAILED,
        //     message: e.response.data.error,
        // });
    }
}

function* watchGetAllSaga() {
    yield takeEvery(GET_ONE_AUCTION_REQ, getOneSaga);
}

export default watchGetAllSaga;
