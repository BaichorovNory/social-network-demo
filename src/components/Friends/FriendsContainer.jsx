import React from 'react';
import StoreContext from '../../StoreContext';
import Friends from './Friends</StoreContext';

const FriendContainer = () => {
    return (
        <StoreContext>
            {
                (store) => {
                    <Friends />
                }
            }
        </StoreContext>
    );
}

export default FriendContainer;