import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../FormsControls/FormsControls';
import { maxLengthCreator } from '../../../validators/validators';

const MyPost = (props) => {

    let postsElements = props.posts.map(post => <Post text={post.text} likes={post.likes} />);

    let onPostChange = (values) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div className={style.postsPadding}>
            <div>
                <h3>Мои посты</h3>
                <div>
                    <AddPostFormRedux onSubmit={onPostChange} />
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.textarea}>
                <Field component={Textarea} name='newPostBody' placeholder='Введите текст' validate={maxLength50} />
            </div>
            <div>
                <button className={style.button}>Добавить</button>
                <button className={style.button}>Удалить</button>
            </div>
        </form >

    )
}
const AddPostFormRedux = reduxForm({ form: 'addPostForm' })(addPostForm)
export default MyPost;