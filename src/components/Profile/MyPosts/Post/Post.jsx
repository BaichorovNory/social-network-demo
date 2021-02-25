import React from 'react';
import react from './react.png';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={react} alt='' />
            <div>
                {props.text}
            </div>
            <div className={style.likes}>{props.likes} лайков</div>
        </div>
    );
}
export default Post;