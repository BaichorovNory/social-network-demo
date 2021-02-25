import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormsControls/FormsControls';
import { login, logout } from '../../Store/authReducer';
import style from '../FormsControls/FormControls.module.css';
import styles from './Login.module.css'
import { requiredField, maxLengthCreator } from '../../validators/validators'

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles}>
            <h1>LOGIN</h1>
            <div>
                <Field placeholder='Введите email' name={'email'} component={Input} validate={[requiredField, maxLength50]} />
            </div>
            <div>
                <Field placeholder='Введите пароль' name={'password'} type={'password'} component={Input} validate={[requiredField, maxLength50]} />
            </div>
            {props.error && <div className={style.formAnyError}>{props.error}</div>}
            <div>
                <button className={styles.button}>Войти</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'} />

    return <ReduxLoginForm onSubmit={onSubmit} />
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login, logout })(Login);