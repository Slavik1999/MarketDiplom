import axios from "axios";
import {put, takeEvery} from "redux-saga/effects";
import {SEND_ORDER, SEND_ORDER_SUCCESS, SEND_ORDER_FAIL} from '../../constants/orders'
import {BASE_URL} from "../../../constants/constants";

export function* ordersSaga(action) {
    try {
        const newBasketArr = [];

        action.payload.basket.forEach(product => {
            newBasketArr.push({productId: product.id, quantity: product.quantity})
        })
        const sendObject = {
            ...action.payload.formValue,
            orderItems: newBasketArr
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
          
        const res = yield axios.post(`${BASE_URL}api/orders`, sendObject, 
        {
            headers: headers
        }).then(res => res)

        yield put({
            type: SEND_ORDER_SUCCESS,
            payload: res.data
        })
        
    } catch (e) {
        console.log(e);
        yield put({
            type: SEND_ORDER_FAIL,
            payload: e.response.data.message
        })
    }
}

function* watchGetAllSaga() {
    yield takeEvery(SEND_ORDER, ordersSaga);
}

export default watchGetAllSaga;
