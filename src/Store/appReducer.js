import { authThunkCreator } from './authReducer'
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    };
}

export const initializeApp = () => {
    return async (dispatch) => {
        let promise = dispatch(authThunkCreator())
        await Promise.all([promise])
        dispatch(initializedSuccess())
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export default appReducer;