import MyPost from './MyPost';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Store/profilePageReducer';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        defaultPostText: state.profilePage.defaultPostText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    };
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;