import {SIGN_UP} from "../../constants/types";

const initialState = {
    authToken: '',
    user: {}
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                token: action.payload
            };
        default:
            return state;
    }
};

export default registrationReducer;
