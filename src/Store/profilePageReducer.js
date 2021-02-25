import { profileAPI } from '../api/api'
const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET_STATUS';
const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, text: 'Первый пост', likes: 10 },
        { id: 2, text: 'Второй пост', likes: 12 },
        { id: 3, text: 'Третий пост', likes: 100 },
        { id: 4, text: 'Четвертый пост', likes: 777 }
    ],
    profile: null
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state, posts: [...state.posts] };
            stateCopy.posts.push({ id: 5, text: action.newPostBody, likes: 0});
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case UPLOAD_PHOTO: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        default:
            return state;
    }
}

export const setUserStatus = (status) => ({ type: SET_STATUS, status });
export const uploadPhotoSuccess = (photos) => ({ type: UPLOAD_PHOTO, photos });
export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    if (response.data.resultCode === 0) {
        dispatch(setUserProfile(response.data));
    }
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const uploadPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(uploadPhotoSuccess(response.data.data.photos))
    }
}

export default profilePageReducer;