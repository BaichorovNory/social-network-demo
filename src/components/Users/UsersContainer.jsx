import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { getUsersThunkCreator } from '../../Store/usersPageReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { toggleFollow, setCurrentPage, toggleFollowingProgress, followTC, unfollowTC } from '../../Store/usersPageReducer';
import { compose } from 'redux';
import { getCurrentPage, getPageSize, getTotalUsersCount, getUsers, getFollowingInProgress, getIsFetching } from '../../Store/usersSelectors';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: getUsers(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(connect(mapStateToProps, { toggleFollow, setCurrentPage, getUsersThunkCreator, toggleFollowingProgress, followTC, unfollowTC }),
    withAuthRedirect)(UsersAPIComponent)