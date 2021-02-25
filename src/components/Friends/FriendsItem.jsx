import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './FriendsItem.module.css';

const FriendsItem = (props) => {
    let path = '/friends/' + props.id;
    return (
        <div className={style.friend}>
            <NavLink to={path}>{props.friend}</NavLink>
        </div>
    );
}
export default FriendsItem;