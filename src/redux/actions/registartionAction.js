// import H from "history";
import {SIGN_UP} from '../constants/types'


export const firstSignup = function (authToken) {
    console.log("authToken", authToken);

    return {
        type:SIGN_UP,
        payload: authToken,
    };
};
