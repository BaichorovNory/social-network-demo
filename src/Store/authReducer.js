import { stopSubmit } from 'redux-form';
import { authMeAPI } from '../api/api'
const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    };
}

export const authThunkCreator = () => {
    return async (dispatch) => {
        let response = await authMeAPI.me()
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUsersData(id, email, login, true));
        }

    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authMeAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(authThunkCreator())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Возникли технические неполадки!'
            dispatch(stopSubmit('login', { email: message }))
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authMeAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUsersData(null, null, null, false))
        }

    }
}

export const setAuthUsersData = (id, email, login, isAuth) => ({ type: SET_USERS_DATA, payload: { id, email, login, isAuth } });
export default authReducer;