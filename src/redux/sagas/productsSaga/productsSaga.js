import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL} from '../../constants/products'
import {BASE_URL} from "../../../constants/constants";

export function* productsSaga() {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
          
        const res = yield axios.get(`${BASE_URL}api/users/products`,
        {
            headers: headers
        }).then(res => res)

        yield put({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: res.data
        })
        
    } catch (e) {
        console.log(e);
        yield put({
            type: FETCH_PRODUCTS_FAIL,
            payload: e.response.data.message
        })
    }
}

function* watchGetAllSaga() {
    yield takeEvery(FETCH_PRODUCTS, productsSaga);
}

export default watchGetAllSaga;
