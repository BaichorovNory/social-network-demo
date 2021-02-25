import React from 'react';
import Message from './Message/Message';
import style from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogsItem/DialogsItem';
import { Textarea } from '../FormsControls/FormsControls'
import { maxLengthCreator } from '../../validators/validators';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}
const maxLenght150 = maxLengthCreator(150)
const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={maxLenght150} placeholder={'Введите сообщение'} name={'newMessageBody'} />
            </div>
            <div className={style.buttonline}>
                <button className={style.button}>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogsAddMessageForm' })(addMessageForm)

export default Dialogs;