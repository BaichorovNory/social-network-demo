import React from 'react';
import FriendsItem from './FriendsItem';
import { Redirect } from 'react-router-dom'

const Friends = (props) => {
    let state = props.friendsPage;
    let friendsElements = state.friends.map(friend => <FriendsItem friend={friend.friend} id={friend.id} />)
    if (props.isAuth === false) return <Redirect to='/login' />
    return (
        <div>
            {friendsElements}
        </div>
    );
}
export default Friends;