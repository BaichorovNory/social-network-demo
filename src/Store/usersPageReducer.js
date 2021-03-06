import { usersListAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    }
                    return u;
                })
            };

        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_USERS_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.userId
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state;
    };
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersListAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
};

export const followTC = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersListAPI.follow(userId);
        if (response.data.resultCode === 0) {
            dispatch(toggleFollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
};

export const unfollowTC = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersListAPI.unfollow(userId);
        if (response.data.resultCode === 0) {
            dispatch(toggleFollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });
export default usersPageReducer;