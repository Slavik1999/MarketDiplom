import { FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL} from '../../constants/profile'
const initialState = {
    loader: false,
    profileData: null,
    errorMessage: ''
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE_SUCCESS: 
            return {
                ...state,
                profileData: action.payload
            };
        case FETCH_PROFILE_FAIL: 
            return {
                ...state,
                errorMessage: action.payload
            }
        
        default:
            return state;
    }
};

export default loaderReducer;
