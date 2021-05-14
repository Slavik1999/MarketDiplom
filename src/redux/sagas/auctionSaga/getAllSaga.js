import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";
import {GET_ALL_AUCTION_REQ, GET_ALL_AUCTION_SUCCESS, GET_ALL_AUCTION_FAILED} from '../../constants/auction'

export function* getAllSaga(action) {
    try {
        const res = yield axios.get('https://afternoon-waters-64991.herokuapp.com/api/auctions')
            .then(res => res)
        console.log(res);
        yield put({
            type: GET_ALL_AUCTION_SUCCESS,
            payload: res.data
        })
    } catch (e) {
        console.log(e);
        yield put({
            type: GET_ALL_AUCTION_FAILED,
            payload: e.message
        })
        // yield put({
        //     type: type.GET_USERS_FAILED,
        //     message: e.response.data.error,
        // });
    }
}

function* watchGetAllSaga() {
    yield takeEvery(GET_ALL_AUCTION_REQ, getAllSaga);
}

export default watchGetAllSaga;
