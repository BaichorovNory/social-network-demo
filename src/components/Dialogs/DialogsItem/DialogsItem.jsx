import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';

const DialogsItem = (props) => {
    let path = '/dialog/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogsItem;