const initialState = {
    email: "",
    password: "",

};
const registrationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case type.GET_SIGNIN_REQ:
        //     return {
        //         ...state,
        //         email: action.payload.email,
        //         password: action.payload.password,
        //         loading: true,
        //         message: "",
        //     };
        default:
            return state;
    }
};

export default registrationReducer;
